/* 선택자 변수 지정 */
const sliderContainer = document.querySelector(".js-sliderContainer");
// const sliderList = document.querySelector(".js-sliderList");
const prevButton = document.querySelector(".js-prevSlider");
const nextButton = document.querySelector(".js-nextSlider");
const sliderArray = Array.from(document.querySelectorAll(".js-sliderList li"));
console.log('sliderArray', sliderArray);

// const SLIDER_CLASS = ".bgImg";
const SLIDER_CLASS = "active";
let currentSlideNumber = 1;
const totalSliderNumber = sliderArray.length;
let currentSlide = document.querySelector(".js-sliderList li:nth-child(1)");

let slideShowInterval = null;  // 슬라이더에 마우스 올리면 null, 아니면 setInterval

currentSlide.classList.add(SLIDER_CLASS);

/* 배경 이미지 띄우기 */
const paintImg = (imgNumber) => {
  const img = new Image();
  img.src = `images/${imgNumber}.jpg`;
  img.classList.add("bgImg");
  sliderContainer.prepend(img);
}

/* 버튼 클릭 핸들러 */
const handlePrevClick = () => {
  if(currentSlideNumber === 1) {
    currentSlideNumber = totalSliderNumber;
  } else {
    currentSlideNumber--;
  }
  transitionTo(currentSlideNumber);
}

const handleNextClick = () => {
  if(currentSlideNumber === totalSliderNumber) {
    currentSlideNumber = 1;
  } else {
    currentSlideNumber++;
  }
  transitionTo(currentSlideNumber);
}

/* 슬라이드 전환 */
const transitionTo = slideNumber => {
  currentSlide.classList.remove(SLIDER_CLASS);
  currentSlide = document.querySelector(`.js-sliderList li:nth-child(${slideNumber})`);
  // paintImg(slideNumber);
  currentSlide.classList.add(SLIDER_CLASS);
}

/* 마우스 over 핸들러 */
const handleMouseOver = () => {
  // 마우스를 슬라이더 위에 올렸을 때 아무 동작도 안하게 함
  clearInterval(slideShowInterval);  // setInterval로 반복하고 있는 것을 멈춤
  slideShowInterval = null;
}

/* 간격 생성 */
const createInterval = () => {
  slideShowInterval = setInterval(handleMouseOver, 2000);  // default는 2초마다 슬라이드 넘기기
}

createInterval();

/* 버튼 이벤트 리스너 */
prevButton.addEventListener("click", handlePrevClick);
nextButton.addEventListener("click", handleNextClick);
sliderContainer.addEventListener("mouseover", handleMouseOver);
sliderContainer.addEventListener("mouseout", createInterval);