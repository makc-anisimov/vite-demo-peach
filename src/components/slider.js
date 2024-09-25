const slides = document.querySelectorAll('.photolife__slide');
const prevBtn = document.querySelector('.photolife__button_left');
const nextBtn = document.querySelector('.photolife__button_right');
const progress = document.querySelector('.photolife__progress');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  const activeItem = progress.querySelector('.photolife__progressItem.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }
  progress.children[index].classList.add('active');
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
});
nextBtn.addEventListener('click',  () => {
  nextSlide();
});

showSlide(currentIndex);
