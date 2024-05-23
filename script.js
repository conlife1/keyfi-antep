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
// Dil seçimini takip etmek için bir olay dinleyicisi ekleme
function changeLanguage() {
    // Seçilen dilin değerini al
    var selectedLanguage = document.getElementById("languageSelect").value;

    // Tüm sayfa içeriğini çevir
    translatePage(selectedLanguage);
}

// Sayfa içeriğini çevirmek için bir fonksiyon ekleme
function translatePage(language) {
    // Tüm çevrilebilir öğeleri al
    var translatableElements = document.querySelectorAll("[data-translate]");

    // Her çevrilebilir öğe için işlem yap
    translatableElements.forEach(function(element) {
        // Öğenin veri-translate özniteliğinden çevrilecek metni al
        var key = element.getAttribute("data-translate");
        
        // Çeviri verilerini içeren dil dosyasını al
        var languageData;
        switch (language) {
            case "tr":
                languageData = languageTR;
                break;
            case "en":
                languageData = languageEN;
                break;
            case "fr":
                languageData = languageFR;
                break;
            case "es":
                languageData = languageES;
                break;
            case "de":
                languageData = languageDE;
                break;
            case "it":
                languageData = languageIT;
                break;
            case "ru":
                languageData = languageRU;
                break;
            case "ar":
                languageData = languageAR;
                break;
            case "ja":
                languageData = languageJA;
                break;
            case "ko":
                languageData = languageKO;
                break;
            case "zh":
                languageData = languageZH;
                break;
            default:
                languageData = languageEN;
        }
        
        const translations = {
    en: {
        welcomeMessage: "THIS SITE IS SPECIALLY PREPARED FOR BEGÜM SEYHAN..",
        loveMessage: "I love you darling..",
        aboutTitle: "About",
        aboutText: "We've known each other for 6 years with my lover. We've gone through many breakups and reconciliations..."
    },
    tr: {
        welcomeMessage: "BU SİTE BEGÜM SEYHAN İÇİN ÖZEL OLARAK HAZIRLANMIŞTIR..",
        loveMessage: "Seni seviyorum sevgilim..",
        aboutTitle: "Hakkında",
        aboutText: "Sevgilimle 6 yıldır tanışıyoruz. Bir çok ayrılık yaşadık tekrar barıştık..."
    },
    fr: {
        welcomeMessage: "CE SITE EST SPÉCIALEMENT PRÉPARÉ POUR BEGÜM SEYHAN..",
        loveMessage: "Je t'aime chérie..",
        aboutTitle: "À propos",
        aboutText: "Nous nous connaissons depuis 6 ans avec mon amoureuse. Nous avons traversé de nombreuses ruptures et réconciliations..."
    },
    es: {
        welcomeMessage: "ESTE SITIO ESTÁ ESPECIALMENTE PREPARADO PARA BEGÜM SEYHAN..",
        loveMessage: "Te amo querida..",
        aboutTitle: "Acerca de",
        aboutText: "Nos conocemos desde hace 6 años con mi amor. Hemos pasado por muchas rupturas y reconciliaciones..."
    },
    de: {
        welcomeMessage: "DIESE SEITE IST SPEZIELL FÜR BEGÜM SEYHAN VORBEREITET..",
        loveMessage: "Ich liebe dich, Liebling..",
        aboutTitle: "Über",
        aboutText: "Wir kennen uns seit 6 Jahren mit meinem Liebsten. Wir haben viele Trennungen und Versöhnungen durchgemacht..."
    },
    it: {
        welcomeMessage: "QUESTO SITO È STATO PREPARATO APPOSITAMENTE PER BEGÜM SEYHAN..",
        loveMessage: "Ti amo cara..",
        aboutTitle: "Informazioni",
        aboutText: "Ci conosciamo da 6 anni con il mio amore. Abbiamo attraversato molte rotture e riconciliazioni..."
    },
    ru: {
        welcomeMessage: "ЭТОТ САЙТ СПЕЦИАЛЬНО ПОДГОТОВЛЕН ДЛЯ БЕГЮМ СЕЙХАН..",
        loveMessage: "Я люблю тебя, дорогая..",
        aboutTitle: "О нас",
        aboutText: "Мы знаем друг друга 6 лет с моей возлюбленной. Мы прошли через многие расставания и примирения..."
    },
    ar: {
        welcomeMessage: "تم إعداد هذا الموقع خصيصًا لـ BEGÜM SEYHAN..",
        loveMessage: "أحبك يا حبيبي..",
        aboutTitle: "حول",
        aboutText: "لقد عرفنا بعضنا البعض لمدة 6 سنوات مع حبيبي. لقد مررنا بالعديد من الانفصالات والمصالحات..."
    },
    ja: {
        welcomeMessage: "このサイトはベグム・セイハンのために特別に準備されました..",
        loveMessage: "愛してるよ、ダーリン..",
        aboutTitle: "約",
        aboutText: "恋人と出会って6年になります。多くの別れと和解を経験しました..."
    },
    ko: {
        welcomeMessage: "이 사이트는 베굼 세이한을 위해 특별히 준비되었습니다..",
        loveMessage: "사랑해요, 자기야..",
        aboutTitle: "약",
        aboutText: "우리는 연인과 6년 동안 알고 지냈습니다. 많은 이별과 화해를 겪었습니다..."
    },
    zh: {
        welcomeMessage: "这个网站是为贝古姆·塞扬特别准备的..",
        loveMessage: "我爱你，亲爱的..",
        aboutTitle: "关于",
        aboutText: "我们与我的爱人认识了6年。我们经历了许多分手和和解..."
    }
};

function changeLanguage() {
    const languageSelect = document.getElementById("languageSelect");
    const selectedLanguage = languageSelect.value;
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.innerText = translations[selectedLanguage][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage(); // Varsayılan dilde ilk çeviri
});

