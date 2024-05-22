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
