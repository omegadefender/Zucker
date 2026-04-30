@echo off
powershell -Command "Compress-Archive -Path '%~dp0manifest.json', '%~dp0content.js', '%~dp0options.html', '%~dp0options.css', '%~dp0options.js', '%~dp0128x128.png', '%~dp048x48.png' -DestinationPath '%~dp0..\0.0.2.7.zip' -Force"
echo Done: 0.0.2.7.zip created.
