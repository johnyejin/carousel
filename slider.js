const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
// firstSlide.classList.add(SHOWING_CLASS);

const slide = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  console.log('currentSlide', currentSlide);
  if(currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {  // 마지막 슬라이드인 경우
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
  console.log('currentSlide', currentSlide);
}

slide();
setInterval(slide, 2000);