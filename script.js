// Example JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  const images = galleryContainer.querySelectorAll('img');

  // Function to handle image clicks
  function handleImageClick(event) {
    // Code to display full-size image or open a modal
    console.log('Image clicked:', event.target.alt);
  }

  // Function to handle image zoom
  function handleImageZoom(event

) {
    // Code to zoom in/out on the image
    console.log('Image zoomed:', event.target.alt);
  }

  // Add event listeners to images
  images.forEach(function(image) {
    image.addEventListener('click', handleImageClick);
    image.addEventListener('mouseover', handleImageZoom);
    image.addEventListener('mouseout', handleImageZoom);
  });
});
