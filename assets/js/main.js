$('.menu-hamburger').on('click', function () {
  $(this).toggleClass('active').
      next().
      toggleClass('active');
});

let $slideItems = $('.carousel-slide');
let $nextBtn = $('.next.carousel-button');
let $prevBtn = $('.prev.carousel-button');
let currentSlide = 0;

let gotoSlide = (n) => {
  $slideItems[currentSlide].classList.toggle('active');
  currentSlide = (n + $slideItems.length) % $slideItems.length;
  $slideItems[currentSlide].classList.toggle('active');
};

let nextSlide = () => {
  gotoSlide(currentSlide + 1);
};

let prevSlide = () => {
  gotoSlide(currentSlide - 1);
};

let slideInterval = setInterval(nextSlide, 5000);

let nextClickHandler = () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
};

let prevClickHandler = () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
};

$nextBtn.on('click', nextClickHandler);
$prevBtn.on('click', prevClickHandler);