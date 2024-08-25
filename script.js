const sliderOverlay = document.querySelector('.slider-overlay');
const pdtoolsImg = document.querySelector('#pdtools-img');

sliderOverlay.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const rect = pdtoolsImg.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const left = rect.left;
  const top = rect.top;
  const hoverX = (x - left) / width;
  const hoverY = (y - top) / height;
  sliderOverlay.style.opacity = hoverX;
});