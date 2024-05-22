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
            case "de":seyhann kardeşlerrrr
                languageData = languageDE;
                break;
            case "fr":
                languageData = languageFR;
                break;
            case "ru":
                languageData = languageRU;
                break;
            case "ar":
                languageData = languageAR;
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
var languageEN = {
    welcomeMessage: "THIS SITE IS SPECIALLY PREPARED FOR BEGÜM SEYHAN..",
    loveMessage: "I love you my dear..",
    aboutTitle: "About",
    aboutText: "We have known each other with my girlfriend for 6 years. We have experienced many separations and reconciliations, we have grown with this cycle, actually we are together for the last 1.5 years. We belong where we are, we are at home. We are two very in love people. Begüm means a lot to me, she is the center of my life, she is my life, I love you so much my love. Our paths crossed at an imam hatip secondary school, the first time I saw her was really the moment when I realized that love exists in this imaginary world, I fell in love with Begüm, I was eating myself, it was pure love :) but we had a problem Begüm had a boyfriend, what should I do, do you think? A: Tell him your feelings B: Respect and withdraw, of course, I also withdrew with much sorrow, but I went to school for Begüm every day, checked her Instagram every day, and loved her so much that Begüm approached me positively when she learned that I loved her, we sent each other story to each other, we spent such beautiful times for each other. For love, everything is done. Then Begüm asked me if my proposal was still valid, of course, I said yes by flying around the room with excitement, I was very happy, it was as if life was mine, then we started talking every day, of course, Begüm was with me as if she had forcibly become a girlfriend every day I wrote I asked, until one week after 06:00 in the morning, it ended with the writing 'Burak, I want to break up' why did she break
