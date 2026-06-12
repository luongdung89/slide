# Lightweight native PowerShell HTTP server
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Server started and listening on http://localhost:$port/"
    Write-Host "Please open http://localhost:$port/standalone_presentation.html in your browser to view the slides."
} catch {
    Write-Host "Failed to start listener: $_"
    exit 1
}

$workspacePath = (Get-Location).Path

# Loop to handle incoming requests
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Clean up requested URL path
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/standalone_presentation.html"
        }
        
        $filePath = Join-Path $workspacePath $urlPath.TrimStart('/')
        
        # Safety check: ensure path is inside workspace
        if (-not $filePath.StartsWith($workspacePath)) {
            $response.StatusCode = 403
            $msg = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
            $response.OutputStream.Write($msg, 0, $msg.Length)
            $response.Close()
            continue
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Content-Type header mapping
            if ($filePath.EndsWith(".html")) {
                $response.ContentType = "text/html; charset=utf-8"
            }
            elseif ($filePath.EndsWith(".css")) {
                $response.ContentType = "text/css; charset=utf-8"
            }
            elseif ($filePath.EndsWith(".js")) {
                $response.ContentType = "application/javascript; charset=utf-8"
            }
            elseif ($filePath.EndsWith(".png")) {
                $response.ContentType = "image/png"
            }
            elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) {
                $response.ContentType = "image/jpeg"
            }
            elseif ($filePath.EndsWith(".svg")) {
                $response.ContentType = "image/svg+xml"
            }
            else {
                $response.ContentType = "application/octet-stream"
            }
            
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: File $urlPath not found in workspace.")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        
        $response.Close()
    } catch {
        # Silent fail on individual connection aborts
    }
}
