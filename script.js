const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
  }
});

// Hero Video Navigation
// const videos = document.querySelectorAll('.hero-video');
// const prevBtn = document.querySelector('.hero-prev');
// const nextBtn = document.querySelector('.hero-next');
// let currentVideoIndex = 0;
// function showVideo(index) {
//   videos.forEach(video => {
//     video.classList.remove('active');
//     video.querySelector('video').pause();
//   });
//   videos[index].classList.add('active');
//   const currentVideo = videos[index].querySelector('video');
//   currentVideo.play();
// }
// function nextVideo() {
//   currentVideoIndex = (currentVideoIndex + 1) % videos.length;
//   showVideo(currentVideoIndex);
// }
// function prevVideo() {
//   currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
//   showVideo(currentVideoIndex);
// }
// prevBtn.addEventListener('click', prevVideo);
// nextBtn.addEventListener('click', nextVideo);
// showVideo(0);

// Image Slider
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevBtnSlide = document.querySelector('.prev');
const nextBtnSlide = document.querySelector('.next');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

nextBtnSlide.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtnSlide.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// Initial position
updateSlidePosition();

// HERO VIDEO SLIDER (tiru slider Tentang Kami)
const heroVideos = document.querySelectorAll('.hero-video');
const heroVideosContainer = document.querySelector('.hero-videos');
const heroPrevBtn = document.querySelector('.hero-prev');
const heroNextBtn = document.querySelector('.hero-next');
let heroCurrent = 0;

function updateHeroVideoSlider() {
  heroVideos.forEach((video, idx) => {
    video.classList.remove('active');
    video.style.transform = `translateX(${(idx - heroCurrent) * 100}%)`;
    video.querySelector('video').pause();
  });
  heroVideos[heroCurrent].classList.add('active');
  heroVideos[heroCurrent].querySelector('video').play();
}

function nextHeroVideo() {
  heroCurrent = (heroCurrent + 1) % heroVideos.length;
  updateHeroVideoSlider();
}

function prevHeroVideo() {
  heroCurrent = (heroCurrent - 1 + heroVideos.length) % heroVideos.length;
  updateHeroVideoSlider();
}

if(heroPrevBtn && heroNextBtn) {
  heroPrevBtn.addEventListener('click', prevHeroVideo);
  heroNextBtn.addEventListener('click', nextHeroVideo);
  updateHeroVideoSlider();
}
