// Toggle responsive navigation on small screens
function toggleNav(e) {
    const nav = document.querySelector('.nav');

    if (nav.className === 'nav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'nav';
    }

    e.preventDefault();
}

// Toggle active class
const menuItem = document.querySelectorAll('.language-btn');

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}

// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function moveSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slides");
    const dots = document.querySelectorAll(".slider-button");
    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}