let slides = document.querySelectorAll(".slide");
let index = 0;

function slideShow(){
    slides.forEach((slide, i)=> {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(slideShow, 3000);
slideShow();