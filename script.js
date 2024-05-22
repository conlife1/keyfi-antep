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
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
    displayDateTime();
    changeLanguage();
});

var translations = {
    en: {
        welcomeMessage: "THIS SITE IS SPECIALLY PREPARED FOR BEGÜM SEYHAN..",
        loveMessage: "I love you, my dear..",
        aboutTitle: "About",
        aboutText: "I have known my love for 6 years..."
    },
    tr: {
        welcomeMessage: "BU SİTE BEGÜM SEYHAN İÇİN ÖZEL OLARAK HAZIRLANMIŞTIR..",
        loveMessage: "Seni seviyorum sevgilim..",
        aboutTitle: "Hakkında",
        aboutText: "Sevgilimle 6 yıldır tanışıyoruz..."
    },
    de: {
        welcomeMessage: "DIESE SEITE IST SPEZIELL FÜR BEGÜM SEYHAN VORBEREITET..",
        loveMessage: "Ich liebe dich, mein Schatz..",
        aboutTitle: "Über",
        aboutText: "Ich kenne meine Liebe seit 6 Jahren..."
    },
    fr: {
        welcomeMessage: "CE SITE EST SPÉCIALEMENT PRÉPARÉ POUR BEGÜM SEYHAN..",
        loveMessage: "Je t'aime, mon cher..",
        aboutTitle: "À propos",
        aboutText: "Je connais mon amour depuis 6 ans..."
    },
    ru: {
        welcomeMessage: "ЭТОТ САЙТ СПЕЦИАЛЬНО ПОДГОТОВЛЕН ДЛЯ БЕГЮМ СЕЙХАН..",
        loveMessage: "Я люблю тебя, моя дорогая..",
        aboutTitle: "О нас",
        aboutText: "Я знаю свою любовь уже 6 лет..."
    },
    ar: {
        welcomeMessage: "تم إعداد هذا الموقع خصيصًا لـ BEGÜM SEYHAN..",
        loveMessage: "أحبك يا عزيزتي..",
        aboutTitle: "حول",
        aboutText: "لقد عرفت حبي لمدة 6 سنوات..."
    }
    // Diğer diller buraya eklenebilir
};

function changeLanguage() {
    var selectedLanguage = document.getElementById('languageSelect').value;
    var translationElements = document.querySelectorAll('[data-translate]');
    translationElements.forEach(function(element) {
        var key = element.getAttribute('data-translate');
        element.textContent = translations[selectedLanguage][key];
    });
}
