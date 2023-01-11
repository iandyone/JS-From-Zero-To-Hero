let slideIndex = 1;
showSlides(slideIndex);

const getNextSlide = () => showSlides(slideIndex += 1);
const getPrevSlide = () => showSlides(slideIndex -= 1);
const setCurrentSlide = (n) => showSlides(slideIndex = n);

function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName("slider__dots-item");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}