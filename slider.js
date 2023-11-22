const leftButton = document.querySelector('.left-arrow');
const rightButton = document.querySelector('.right-arrow');
const slides = document.getElementsByTagName('li');

let slideIndex = 1;

leftButton.addEventListener('click', () => {
  slideIndex--;
  if(slideIndex < 1)
    slideIndex = slides.length;
  showSlides(slideIndex);
});

rightButton.addEventListener('click', () => {
  slideIndex++;
  if(slideIndex > slides.length)
    slideIndex = 1;
  showSlides(slideIndex);
});

const showSlides = (currentIndex) => {
  console.log(currentIndex);
  let i;
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentIndex - 1].style.display = "block";
}

showSlides(slideIndex);