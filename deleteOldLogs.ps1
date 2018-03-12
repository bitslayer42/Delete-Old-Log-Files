# Delete logfiles older than 30 day(s)
$Path = "C:\path\logfiles"
$Daysback = "-30"

$CurrentDate = Get-Date
$DatetoDelete = $CurrentDate.AddDays($Daysback)
Get-ChildItem $Path | Where-Object { $_.LastWriteTime -lt $DatetoDelete } | Remove-Item #-WhatIf
# Uncomment -WhatIf to see what files would be deleted

