function bulb(num) {
    if (num==1) {
        document.getElementById("center").src = "images/pic_bulbon.webp";
    } else {
        document.getElementById("center").src = "images/pic_bulboff.gif";
    }
}
