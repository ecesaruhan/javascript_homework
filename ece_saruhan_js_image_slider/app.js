const sliderImage = document.querySelectorAll("img");
const sliderCount = sliderImage.length;
const prevImage = document.getElementById("btn-prev");
const nextImage = document.getElementById("btn-next");
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove('active');
    if (activeImage.nextElementSibling) {
        activeImage.nextElementSibling.classList.add('active');
    } else {
        sliderImage[0].classList.add('active');
    }
}

const prevSlide = () => {
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove('active');
    if (activeImage.previousElementSibling) {
        activeImage.previousElementSibling.classList.add('active');
    } else {
        sliderImage[sliderCount - 1].classList.add('active');
    }
}

nextImage.addEventListener("click", () => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

prevImage.addEventListener("click", () => {
    prevSlide();
})

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}