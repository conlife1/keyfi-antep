// Dil seçme fonksiyonu
function changeLanguage(lang) {
    var loveMessage = document.getElementById('love-message');
    switch (lang) {
        case 'tr':
            loveMessage.innerText = 'Seni Seviyorum Begüm';
            break;
        case 'en':
            loveMessage.innerText = 'I Love You Begüm';
            break;
        case 'fr':
            loveMessage.innerText = 'Je t\'aime Begüm';
            break;
        case 'es':
            loveMessage.innerText = 'Te quiero Begüm';
            break;
        case 'de':
            loveMessage.innerText = 'Ich liebe dich Begüm';
            break;
        case 'it':
            loveMessage.innerText = 'Ti amo Begüm';
            break;
        case 'ru':
            loveMessage.innerText = 'Я тебя люблю Begüm';
            break;
        case 'ar':
            loveMessage.innerText = 'أحبك Begüm';
            break;
        case 'ja':
            loveMessage.innerText = '愛してる Begüm';
            break;
        case 'ko':
            loveMessage.innerText = '사랑해 Begüm';
            break;
        case 'zh':
            loveMessage.innerText = '我爱你 Begüm';
            break;
        default:
            loveMessage.innerText = 'Seni Seviyorum Begüm';
            break;
    }
}
// Belirtilen tarih ve saat
const targetDate = new Date("2025-05-13T14:30:00");

// Geri sayımı başlat
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;
    
    if (timeDifference <= 0) {
        document.getElementById('countdown').innerText = "Zaman doldu!";
        clearInterval(countdownInterval);
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerText = 
        `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
}

// Güncellemeyi her saniye yap
const countdownInterval = setInterval(updateCountdown, 1000);

// İlk güncellemeyi hemen yap
updateCountdown();
    }

    // Güncellemeleri her saniye yap
    setInterval(updateCountdown, 1000);

    // İlk güncellemeyi hemen yap
    updateCountdown();
});
