const slides = document.querySelectorAll('.photolife__slide');
const prevBtn = document.querySelector('.photolife__button_left');
const nextBtn = document.querySelector('.photolife__button_right');
const progress = document.querySelector('.photolife__progress');

let currentIndex = 0;
// function updateProgressBar() {
//   const progressBar = document.querySelector('.progress');
//   progressBar.style.width = `${(currentIndex / (slides.length - 1)) * 100}%`;
// }
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  const activeItem = progress.querySelector('.photolife__progressItem.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }
  progress.children[index].classList.add('active');
  // updateProgressBar();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

slides.forEach((slide, index) => {
  const progressItem = document.createElement('div');
  progressItem.classList.add('photolife__progressItem');
  progressItem.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
  progress.appendChild(progressItem);
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  // updateProgressBar();
});
nextBtn.addEventListener('click',  () => {
  nextSlide();
  // updateProgressBar();
});

showSlide(currentIndex);
