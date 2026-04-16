const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
 
document.querySelector(".next").addEventListener("click", () => {
    index++;
    if (index >= totalSlides) index = 0;
    updateCarousel();
});
 
document.querySelector(".prev").addEventListener("click", () => {
    index--;
    if (index < 0) index = totalSlides - 1;
    updateCarousel();
});
 
function updateCarousel() {
    slides.style.transform = `translateX(-${index * 300}px)`;
}
 
 
 