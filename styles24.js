document.addEventListener('DOMContentLoaded', function() {
    // Tüm fotoğrafları seç
    const photos = document.querySelectorAll('.timeline-item img');

    // Her bir fotoğraf için tıklama olayını ayarla
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            // Mevcut boyutu kontrol et
            const isExpanded = this.classList.contains('expanded');

            // Diğer tüm fotoğrafları küçült
            photos.forEach(p => p.classList.remove('expanded'));

            // Eğer tıklanan fotoğraf zaten büyükse, küçült
            if (isExpanded) {
                this.classList.remove('expanded');
            } else {
                // Tıklanan fotoğrafı büyüt
                this.classList.add('expanded');
            }
        });
    });
});

// CSS ile genişletme stilini tanımlayın
const style = document.createElement('style');
style.innerHTML = `
    .timeline-item img.expanded {
        transform: scale(1.5); /* Fotoğrafı %150 büyüt */
        z-index: 10; /* Fotoğrafın diğer öğelerin üstünde görünmesini sağla */
    }
`;
document.head.appendChild(style);
