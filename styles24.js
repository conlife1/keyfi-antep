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
