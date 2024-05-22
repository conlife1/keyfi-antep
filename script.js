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
        
        // Çeviri verilerinden ilgili metni al ve öğenin içeriğini güncelle
        if (languageData[key]) {
            element.textContent = languageData[key];
        }
    });
}

// Sayfa yüklendiğinde varsayılan olarak İngilizce çeviriyi uygula
translatePage("en");

