const nextBtn = document.getElementById('nextBtn');
const galleryImages = document.querySelectorAll('.gallery img');

let currentImageIndex = 0;

nextBtn.addEventListener('click', () => {
  galleryImages[currentImageIndex].style.opacity = '0';
  
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  
  galleryImages[currentImageIndex].style.opacity = '1';
});