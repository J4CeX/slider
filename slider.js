const leftButton = document.querySelector('.left-arrow');
const rightButton = document.querySelector('.right-arrow');
const images = document.getElementsByTagName('img');

let index = 0;

leftButton.addEventListener('click', () => {
  index--;
  if(index < 0)
    index = images.length - 1;
  
});

rightButton.addEventListener('click', () => {
  index++;
  if(index > images.length - 1)
    index = 0;
  console.log(index);
})

const sliderRoll = document.querySelector('.slider-roll');
sliderRoll.style.width = `${100*images.length}%`;