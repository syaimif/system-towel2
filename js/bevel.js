function RunBlankOnLinux() {
	Utils.run_command("/usr/lib/i386-linux-gnu/webkit2gtk-3.0/libexec/MiniBrowser http://blankonlinux.or.id");
}
function RunDevBlankOnLinux() {
	Utils.run_command("/usr/lib/i386-linux-gnu/webkit2gtk-3.0/libexec/MiniBrowser http://dev.blankonlinux.or.id");
}
function RunFacebook() {
	Utils.run_command("exo-open --launch WebBrowser %u https://www.facebook.com/blankon.linux");
}
function RunTwitter() {
	Utils.run_command("exo-open --launch WebBrowser %u https://twitter.com/BlankOnLinux");
}
