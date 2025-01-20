/*
Write eicar testfile to storage and check endpointprotection.
Author: Klau5t4ler0x90
*/


// sets typing speed to "natural"
function natural() {
  typingSpeed(100,150)	// Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)
}

// sets typing speed as fast as possible
function fast() {
  typingSpeed(0,0)
}

// Open an PowerShell console (Windows)
function startPS() {
  press("GUI r");
  delay(1000);
  type("powershell");
  press("ENTER");
}

// move to dir temp, someitimes rename to tmp
function filesys() {
  type("cd ..");
  press("ENTER");
  type("cd ..");
  press("ENTER");
  type("cd ..");
  press("ENTER");
  type("cd ..");
  press("ENTER");
  type("cd temp");
  press("ENTER");
}

// create eicar.bat and run it
function eicar() {
  type("echo 'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H* h' > eicar.bat");
  press("ENTER");
  delay(500)
  type("cmd eicar.bat");
  press("ENTER");
}

layout('de');			// DE keyboard layout
fast();

startPS();
delay(500);
filesys();
delay(500);
eicar();
