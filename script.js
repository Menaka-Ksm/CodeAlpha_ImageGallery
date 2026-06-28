// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image img');

// Get the popup and close button
const popup = document.getElementById('popup');
const popupImage = document.querySelector('.popup-image');
const closeButton = document.querySelector('.close');

// Add click event to each gallery image
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        // Set the popup image source to the clicked image
        popupImage.src = this.src;
        
        // Display the popup
        popup.classList.add('active');
    });
});

// Function to close the popup
function closePopup() {
    popup.classList.remove('active');
}

// Close when clicking the X button
closeButton.addEventListener('click', closePopup);

// Close when clicking outside the image
popup.addEventListener('click', function(event) {
    // Only close if clicking on the popup background, not the image
    if (event.target === popup) {
        closePopup();
    }
});

// Close popup when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});
