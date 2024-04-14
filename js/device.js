var isMobile = /Mobile|Android|iPhone/i.test(navigator.userAgent);

if(isMobile == 0) {
    document.getElementById("presetPC").style.display = "inline";
    document.getElementById("presetM").style.display = "none";
} else {
    document.getElementById("presetPC").style.display = "none";
    document.getElementById("presetM").style.display = "inline";
}