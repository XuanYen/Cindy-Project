var topbar = document.getElementsByClassName("topbar")[0];
var logo = document.getElementsByClassName("logo")[0];
var logobrand = document.getElementsByClassName("logobrand")[0];
document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= 80) {
        topbar.style.display = 'none';
        logo.style.width = '60%';
        logobrand.style.marginTop = '0';
    }
    else {
        topbar.style.display = 'block';
        logo.style.width = 'initial';
        logobrand.style.marginTop = '0.5rem';
    }
});