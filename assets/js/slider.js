const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.slider__dot')
const mainSlide = document.querySelector('.slider__inner');
const container = document.querySelector('.slider__container');
const slidesCount = mainSlide.querySelectorAll('div').length / 2;

let activeSlideIndex = 0;

next.addEventListener('click', () => {
  changeSlide('next');
});

prev.addEventListener('click', () => {
  changeSlide('prev');
});

const changeSlide = (direction) => {
  if (direction === 'next') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'prev') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }
  
  if (direction >= 0) {
    activeSlideIndex = direction
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot__active", "");
  }
  document.querySelector(`.dot${activeSlideIndex + 1}`).classList.add('dot__active')

  mainSlide.style.transform = `translateX(-${activeSlideIndex * container.clientWidth}px)`;
}
