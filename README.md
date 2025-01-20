# P4wnP1_HID_scripts
Client hardening was never so easy. Don't waste your valuable time typing out orders. HID scripts you will love.

## What is P4wnP1
P4wnP1 is the best alternative to the Rubber-Ducky. Here you will find everything you need to know about it: LINK.

Short summary:

Get the following hardware:
* raspberry pi zero w /wh
* usb shield for raspberry pi zero
* Micro SD card (32GB+)

Download the finished image from [P4wnP1-A.L.O.A](https://github.com/RoganDawes/P4wnP1_aloa/releases/tag/v0.1.1-beta) and load it onto the SD card using an imager.

Then connect to the Wifi of the nine P4wnP1 stick:
* ssid 💥🖥💥 Ⓟ➃ⓌⓃ🅟❶
* psk MaMe82-P4wnP1

As soon as you are connected, start your web browser and open the user interface: http://172.24.0.1:8000

Congratulations. Now change the WLAN name and password and don't forget to save these settings permanently in the settings.

Now you can insert the HID scripts via the tab.

Alternatively, you can also use SSH. To do this, store the scripts in the HIDScripts folder.

## LocalStorage
Another great way to work with the P4wnP1:

As soon as the USB stick is plugged into a computer, it not only pretends to be a keyboard and mouse. It pretends to be a web interface and listens to incoming connections 172.16.0.1

As an experienced hacker, you know that you can not only access the stick via SSH, but also start the Apache web server, which is installed on the Kali by default.

All scripts can be stored locally here. This way you can ensure that you can also run your tests on client systems that cannot connect to the Internet for security reasons.

Feel free to store whatever program you like on the P4wnP1:
* WinPEAS.bat
* Seatbelt.exe
* LaZagne.exe
* Winpwn.ps1

This is a have to. Now you can use a trigger script and execute scripts from the local webserver.


## Acknowledgments

I would like to thank [RoganDawes](https://github.com/RoganDawes/P4wnP1_aloa) for making this possible. 

I would also like to thank the developers of the scripts who support us in our work every day:
* [techspence / ScriptSentry](https://github.com/techspence/ScriptSentry/tree/main)
* [peass-ng / PEASS-ng](https://github.com/peass-ng/PEASS-ng)
* [SpecterOps / BloodHound-Legacy](https://github.com/SpecterOps/BloodHound-Legacy)
* [enjoiz / Privesc](https://github.com/enjoiz/Privesc)
* [AlessandroZ / LaZagne](https://github.com/AlessandroZ/LaZagne)
* [S3cur3Th1sSh1t / WinPwn](https://github.com/S3cur3Th1sSh1t/WinPwn)
