var slideIndex = 1;
var slides = document.getElementsByClassName("FQA");
var tabHeaders = document.getElementsByTagName("figcaption")
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function ShowTab(event) {
    for (var i = 0; i < tabHeaders.length; i++) {
        tabHeaders[i].className = "";
    }
    event.target.className = "selected";
}