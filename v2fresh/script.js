// Draggable Slider
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const seeker = document.querySelector('.seeker');
let isDragging = false;

slider.addEventListener('mousedown', (event) => {
  isDragging = true;
  slider.classList.add('active');
});

sliderContainer.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const xPos = event.clientX - sliderContainer.getBoundingClientRect().left;
    const sliderWidth = sliderContainer.offsetWidth;
    const progress = xPos / sliderWidth;
    slider.style.width = `${progress * 100}%`;
    seeker.style.left = `${progress * 100}%`;
    // Add your logic here to act accordingly based on the seeker position
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    slider.classList.remove('active');
  }
});
