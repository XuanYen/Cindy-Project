var pageHeight = window.innerHeight;
window.onkeydown = function (e) {
    if (e.keyCode == 40) {
        window.scrollBy(0, pageHeight);
    }
};