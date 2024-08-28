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
// Modal elementleri
var modal = document.getElementById("photo-modal");
var img = document.getElementById("modal-img");
var description = document.getElementById("modal-description");
var span = document.getElementsByClassName("close")[0];

// Fotoğrafa tıklandığında modal'ı aç
document.querySelectorAll('.photo-link').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        var photoSrc = item.getAttribute('data-photo');
        var photoDesc = item.getAttribute('data-description');
        img.src = photoSrc;
        description.textContent = photoDesc;
        modal.style.display = "block";
    });
});

// Kapatma butonuna tıklandığında modal'ı kapat
span.onclick = function() {
    modal.style.display = "none";
}

// Modal dışına tıklandığında modal'ı kapat
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
