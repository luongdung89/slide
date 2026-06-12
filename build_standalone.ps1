# PowerShell script to compile standalone_presentation.html
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$htmlPath = "index.html"
$cssPath = "style.css"
$dataPath = "slidesData.js"
$appPath = "app.js"
$outputPath = "standalone_presentation.html"

if (-not (Test-Path $htmlPath) -or -not (Test-Path $cssPath) -or -not (Test-Path $dataPath) -or -not (Test-Path $appPath)) {
    Write-Error "One of the source files (index.html, style.css, slidesData.js, app.js) is missing!"
    exit 1
}

Write-Host "Compiling standalone presentation..."

$htmlLines = Get-Content -Path $htmlPath -Encoding UTF8
$cssContent = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
$dataContent = [System.IO.File]::ReadAllText($dataPath, [System.Text.Encoding]::UTF8)
$appContent = [System.IO.File]::ReadAllText($appPath, [System.Text.Encoding]::UTF8)

$outputLines = [System.Collections.Generic.List[string]]::new()

foreach ($line in $htmlLines) {
    if ($line -match '<link.*rel="stylesheet".*href="style.css".*>') {
        $outputLines.Add("    <style>")
        # Split CSS into lines to write nicely
        $cssLines = $cssContent -split "`r?`n"
        foreach ($cssLine in $cssLines) {
            $outputLines.Add($cssLine)
        }
        $outputLines.Add("    </style>")
    }
    elseif ($line -match '<script.*src="slidesData.js".*></script>') {
        $outputLines.Add("    <script>")
        $dataLines = $dataContent -split "`r?`n"
        foreach ($dataLine in $dataLines) {
            $outputLines.Add($dataLine)
        }
        $outputLines.Add("    </script>")
    }
    elseif ($line -match '<script.*src="app.js".*></script>') {
        if (Test-Path "savedState.json") {
            Write-Host "Inlining savedState.json into output..."
            $savedStateContent = [System.IO.File]::ReadAllText("savedState.json", [System.Text.Encoding]::UTF8)
            $outputLines.Add("    <script>")
            $outputLines.Add("      const serverSavedState = $savedStateContent;")
            $outputLines.Add("    </script>")
        }
        $outputLines.Add("    <script>")
        $appLines = $appContent -split "`r?`n"
        foreach ($appLine in $appLines) {
            $outputLines.Add($appLine)
        }
        $outputLines.Add("    </script>")
    }
    else {
        # Modify the title if it contains "Slide Tương Tác" to "Standalone Slide"
        if ($line -match "<title>(.*)</title>") {
            $title = $Matches[1]
            $line = $line -replace $title, "Thực Hành Dùng AI Để Học - Standalone Slide V3.0"
        }
        $outputLines.Add($line)
    }
}

[System.IO.File]::WriteAllLines($outputPath, $outputLines, [System.Text.Encoding]::UTF8)
Write-Host "Standalone presentation successfully compiled at $outputPath"
