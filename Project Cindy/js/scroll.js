var prevScrollpos = window.pageYOffset; //Trả về số pixel mà document đã được cuộn theo phương thẳng đứng.
var backtotop = document.getElementById("back-to-top");
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("headnavbar").style.top = "0";
        backtotop.style.display = 'none';
    } else {
        document.getElementById("headnavbar").style.top = "-100px";
        backtotop.style.display = 'block';
    }
    prevScrollpos = currentScrollPos;
}