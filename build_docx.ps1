# Set console output encoding to UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Define Word constants
$wdFormatXMLDocument = 12
$wdParagraphAlignmentCenter = 1
$wdParagraphAlignmentLeft = 0

# Check if file exists
$mdPath = "detailed_slide_description.md"
if (-not (Test-Path $mdPath)) {
    Write-Error "Source markdown file not found: $mdPath"
    exit 1
}

# Start Word
Write-Host "Starting Microsoft Word..."
$word = New-Object -ComObject Word.Application
$word.Visible = $false

# Create new document
$doc = $word.Documents.Add()
$selection = $word.Selection

# Page setup (margins: 1 inch / 72 points)
$doc.PageSetup.TopMargin = 72
$doc.PageSetup.BottomMargin = 72
$doc.PageSetup.LeftMargin = 72
$doc.PageSetup.RightMargin = 72

# Read Markdown file
$mdContent = [System.IO.File]::ReadAllText($mdPath, [System.Text.Encoding]::UTF8)
$lines = $mdContent -split "`r?`n"

# Helper function to apply font styling and write text to selection
function ApplyAndWriteText($sel, $text, $bold, $italic, $code) {
    if ($code) {
        $sel.Font.Name = "Consolas"
        $sel.Font.Size = 10
        $sel.Font.Color = 8388608 # Dark Red/Maroon
        $sel.Font.Bold = $false
        $sel.Font.Italic = $false
    } else {
        $sel.Font.Name = "Segoe UI"
        $sel.Font.Size = 11
        $sel.Font.Color = 0 # Auto / Black
        $sel.Font.Bold = $bold
        $sel.Font.Italic = $italic
    }
    $sel.TypeText($text)
}

# Helper function to parse bold (**), italic (*), and inline code (`)
function Write-FormattedText($sel, $text) {
    $isBold = $false
    $isItalic = $false
    $isCode = $false
    
    $i = 0
    $len = $text.Length
    $currentChunk = ""
    
    while ($i -lt $len) {
        # Check for Bold (**)
        if ($i -le $len - 2 -and $text.Substring($i, 2) -eq "**") {
            if ($currentChunk -ne "") {
                ApplyAndWriteText $sel $currentChunk $isBold $isItalic $isCode
                $currentChunk = ""
            }
            $isBold = -not $isBold
            $i += 2
        }
        # Check for Inline Code (backtick) using ASCII code 96
        elseif ($text[$i] -eq [char]96) {
            if ($currentChunk -ne "") {
                ApplyAndWriteText $sel $currentChunk $isBold $isItalic $isCode
                $currentChunk = ""
            }
            $isCode = -not $isCode
            $i += 1
        }
        # Check for Italic (*)
        elseif ($text[$i] -eq "*") {
            if ($currentChunk -ne "") {
                ApplyAndWriteText $sel $currentChunk $isBold $isItalic $isCode
                $currentChunk = ""
            }
            $isItalic = -not $isItalic
            $i += 1
        }
        # Normal character
        else {
            $currentChunk += $text[$i]
            $i += 1
        }
    }
    
    # Flush remaining text
    if ($currentChunk -ne "") {
        ApplyAndWriteText $sel $currentChunk $isBold $isItalic $isCode
    }
}

Write-Host "Generating Word document content..."

$lineCount = $lines.Count
for ($i = 0; $i -lt $lineCount; $i++) {
    $line = $lines[$i]
    $trimmed = $line.Trim()
    
    if ($trimmed -eq "") {
        # Keep paragraph spacing instead of empty lines
        continue
    }
    
    if ($trimmed.StartsWith("# ")) {
        # Title / Heading 1
        $titleText = $trimmed.Substring(2)
        $selection.Style = "Heading 1"
        $selection.Font.Name = "Segoe UI Semibold"
        $selection.Font.Size = 22
        $selection.Font.Bold = $true
        $selection.Font.Color = 10040064 # Teal-ish Blue
        $selection.ParagraphFormat.SpaceBefore = 12
        $selection.ParagraphFormat.SpaceAfter = 6
        $selection.ParagraphFormat.LeftIndent = 0
        Write-FormattedText $selection $titleText
        $selection.TypeParagraph()
    }
    elseif ($trimmed.StartsWith("## ")) {
        # Heading 2
        $titleText = $trimmed.Substring(3)
        $selection.Style = "Heading 2"
        $selection.Font.Name = "Segoe UI Semibold"
        $selection.Font.Size = 15
        $selection.Font.Bold = $true
        $selection.Font.Color = 2236962 # Charcoal / Dark Blue
        $selection.ParagraphFormat.SpaceBefore = 12
        $selection.ParagraphFormat.SpaceAfter = 4
        $selection.ParagraphFormat.LeftIndent = 0
        Write-FormattedText $selection $titleText
        $selection.TypeParagraph()
    }
    elseif ($trimmed.StartsWith("### ")) {
        # Heading 3
        $titleText = $trimmed.Substring(4)
        $selection.Style = "Heading 3"
        $selection.Font.Name = "Segoe UI Semibold"
        $selection.Font.Size = 12
        $selection.Font.Bold = $true
        $selection.Font.Color = 8421376 # Medium Gray/Teal
        $selection.ParagraphFormat.SpaceBefore = 8
        $selection.ParagraphFormat.SpaceAfter = 2
        $selection.ParagraphFormat.LeftIndent = 0
        Write-FormattedText $selection $titleText
        $selection.TypeParagraph()
    }
    elseif ($trimmed.StartsWith("---")) {
        # Horizontal Rule
        $selection.Style = "Normal"
        $selection.Font.Name = "Segoe UI"
        $selection.Font.Size = 8
        $selection.Font.Color = 12632256 # Light Gray
        $selection.ParagraphFormat.LeftIndent = 0
        $selection.TypeText("_________________________________________________________________________________")
        $selection.TypeParagraph()
    }
    else {
        # List items or Normal Paragraphs
        if ($line.StartsWith("* ") -or $line.StartsWith("- ") -or $line.StartsWith("    * ") -or $line.StartsWith("    - ") -or $line.StartsWith("        * ") -or $line.StartsWith("        - ")) {
            # List Bullet
            $selection.Style = "List Bullet"
            $selection.ParagraphFormat.SpaceBefore = 2
            $selection.ParagraphFormat.SpaceAfter = 2
            
            # Indent level based on leading spaces
            $leftIndent = 0
            if ($line.StartsWith("        ")) {
                $leftIndent = 36 # Level 2
            } elseif ($line.StartsWith("    ")) {
                $leftIndent = 18 # Level 1
            }
            $selection.ParagraphFormat.LeftIndent = 18 + $leftIndent
            
            # Extract content after Bullet marker
            $bulletText = $trimmed.Substring(2).Trim()
            Write-FormattedText $selection $bulletText
            $selection.TypeParagraph()
        }
        else {
            # Normal text
            $selection.Style = "Normal"
            $selection.ParagraphFormat.SpaceBefore = 3
            $selection.ParagraphFormat.SpaceAfter = 3
            $selection.ParagraphFormat.LeftIndent = 0
            
            Write-FormattedText $selection $trimmed
            $selection.TypeParagraph()
        }
    }
}

# Save as DOCX
$outputPath = [string](Join-Path (Get-Location).Path "detailed_slide_description.docx")
Write-Host "Saving document to $outputPath..."
if (Test-Path $outputPath) {
    Remove-Item $outputPath -Force
}

$doc.SaveAs($outputPath, 12)
$doc.Close()
$word.Quit()

Write-Host "Word document successfully created!"
