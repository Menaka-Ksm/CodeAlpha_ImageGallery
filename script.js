
const galleryImages = document.querySelectorAll('.gallery-image img');


const popup = document.getElementById('popup');
const popupImage = document.querySelector('.popup-image');
const closeButton = document.querySelector('.close');

galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      
        popupImage.src = this.src;
        
        
        popup.classList.add('active');
    });
});


function closePopup() {
    popup.classList.remove('active');
}


closeButton.addEventListener('click', closePopup);


popup.addEventListener('click', function(event) {
   
    if (event.target === popup) {
        closePopup();
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});
