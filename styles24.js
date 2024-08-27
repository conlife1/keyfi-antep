function showImage(imgSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("modal-caption");
    
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = document.querySelector(`[src='${imgSrc}']`).nextElementSibling.textContent;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
