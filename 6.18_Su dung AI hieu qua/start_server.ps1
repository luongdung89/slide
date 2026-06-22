# Port to run the server on
$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

Write-Host "--------------------------------------------------------"
Write-Host "NOVASTARS LOCAL WEB SERVER"
Write-Host "Starting server on http://localhost:$port/"
Write-Host "Press Ctrl+C in terminal or close task to stop server."
Write-Host "--------------------------------------------------------"

try {
    $listener.Start()
    Write-Host "Server is online. Opening browser..."
    Start-Process "http://localhost:$port/"
    
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $urlPath = $request.Url.LocalPath
            
            # Handle saving slides back to file system
            if ($request.HttpMethod -eq "POST" -and $urlPath -eq "/save_slides") {
                try {
                    $reader = New-Object System.IO.StreamReader($request.InputStream)
                    $body = $reader.ReadToEnd()
                    
                    # Format javascript content
                    $jsContent = "const INITIAL_SLIDES = " + $body + ";"
                    
                    # Write to slides_data.js
                    $slidesFile = Join-Path $PSScriptRoot "slides_data.js"
                    [System.IO.File]::WriteAllText($slidesFile, $jsContent, [System.Text.Encoding]::UTF8)
                    
                    # Send success response
                    $response.StatusCode = 200
                    $response.ContentType = "application/json; charset=utf-8"
                    $resBytes = [System.Text.Encoding]::UTF8.GetBytes('{"status":"success","message":"Slides saved successfully"}')
                    $response.OutputStream.Write($resBytes, 0, $resBytes.Length)
                } catch {
                    $response.StatusCode = 500
                    $errBytes = [System.Text.Encoding]::UTF8.GetBytes('{"status":"error","message":"' + $_.Exception.Message + '"}')
                    $response.ContentType = "application/json; charset=utf-8"
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
                $response.Close()
                continue
            }

            # Serve index.html by default
            if ($urlPath -eq "/") { 
                $urlPath = "/index.html" 
            }
            
            # Decode URL path in case there are spaces or special characters
            $decodedPath = [System.Uri]::UnescapeDataString($urlPath)
            # Clean path up and build local path
            $relativePath = $decodedPath.TrimStart('/')
            $localFile = Join-Path $PSScriptRoot $relativePath

            if (Test-Path $localFile -PathType Leaf) {
                # Map file extension to MIME type
                $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
                $contentType = "text/plain"
                switch ($ext) {
                    ".html" { $contentType = "text/html; charset=utf-8" }
                    ".css"  { $contentType = "text/css; charset=utf-8" }
                    ".js"   { $contentType = "application/javascript; charset=utf-8" }
                    ".json" { $contentType = "application/json; charset=utf-8" }
                    ".png"  { $contentType = "image/png" }
                    ".jpg"  { $contentType = "image/jpeg" }
                    ".jpeg" { $contentType = "image/jpeg" }
                    ".gif"  { $contentType = "image/gif" }
                    ".svg"  { $contentType = "image/svg+xml" }
                    ".ico"  { $contentType = "image/x-icon" }
                }
                
                # Disable browser caching for static resources
                $response.AddHeader("Cache-Control", "no-store, no-cache, must-revalidate")
                $response.AddHeader("Pragma", "no-cache")
                $response.AddHeader("Expires", "0")
                
                # Read binary file bytes
                $bytes = [System.IO.File]::ReadAllBytes($localFile)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                
                # Write to output stream
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                # File Not Found
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found: $decodedPath")
                $response.ContentType = "text/plain; charset=utf-8"
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
            $response.Close()
        } catch {
            Write-Host "Request handling error: $($_.Exception.Message)"
        }
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
}
