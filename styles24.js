function showImage(imgSrc, captionText) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var caption = document.getElementById("modal-caption");
    
    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.textContent = captionText;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
}
// JavaScript for handling modal image view
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var modalCaption = document.getElementById('modal-caption');
    var modalClose = document.getElementById('modal-close');

    // Get all images with class "expandable"
    var images = document.querySelectorAll('img.expandable');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalCaption.innerHTML = this.nextElementSibling.innerHTML; // Get caption from next <p> element
        });
    });

    // When the user clicks on <span> (x), close the modal
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
