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
        aboutText: "We have known each other for 6 years. We have experienced many breakups and reconciliations, and we have grown through this cycle. However, we have been together for the last 1.5 years. We are at home, where we belong. We are two people deeply in love with each other. Begüm means a lot to me; she is the center of my life. I love you so much, my love. I first met Begüm in a religious middle school. The moment I saw her, I realized that love in this dream world is real. I fell deeply in love with Begüm and was tearing myself apart because of my pure love for her. But there was a problem: Begüm had a boyfriend. What should I do? A: Tell her my feelings B: Respect her and step back. Of course, I stepped back with great sadness, but I went to school every day for Begüm, checked her Instagram every day, and loved her so much that I looked at her photo every day. When she found out that I loved her, she approached me positively. We were sending each other indirect stories, and those were such beautiful times when everything was done for love. Then Begüm asked me if my proposal was still valid, and I said yes without even realizing how many times I spun around the room in the air with joy. I was so happy, it was as if life had become mine. We started talking every day. Of course, it was like Begüm had reluctantly become my girlfriend; I was the one texting and asking questions every day. Until one week later, at 6:00 AM, she texted, Burak, I want to break up, and it was over. Why did she break up? Did I do something? I had no idea. The only thing I could do was cry my heart out for the girl I loved. After that, I realized that she had blocked me everywhere. I immediately created a fake account, sent Begüm a request, and wrote, Please come back, what did I do? Her only response was, It had to be this way, and she blocked me again. That was everything. I was trying to get used to the first shock I had experienced in life. Time passed, chubby Burak slimmed down, hair grew, and the old Burak was gone. Now, a ruthless person had emerged. During the corona period, schools were closed, and changes happened. Then schools opened. On the first day of school, I went, still looking for Begüm, still excited, but I had revenge to take. When we went out for the first break, I noticed Begüm and her group walking around, but I didn't care. They were walking right in front of us. Begüm looked back once, saw me, was very surprised, and looked back again. Of course, after some conversations, we were back together. It seemed nice, but there was a sadness inside me. Our relationship ended 1-2 weeks later when I suddenly wanted to break up. Of course, who knew, years passed, we both had relationships and flings, but we knew we were in love with each other. Then life brought us back together. We faced many challenges, but we are where we belong, at home. Now we have been in a good and bad relationship for 1 year and 10 months. Begüm, I love you so much. I am deeply in love with you. I am so glad you are in my life. I cannot thank God enough for you. No matter how much we argue or hurt each other, you are my sweetheart, and you will always be so, my love. I'm so glad you're here..."
    },
            
    tr: {
        welcomeMessage: "BU SİTE BEGÜM SEYHAN İÇİN ÖZEL OLARAK HAZIRLANMIŞTIR..",
        loveMessage: "Seni seviyorum sevgilim..",
        aboutTitle: "Hakkında",
        aboutText: "Sevgilimle 6 yıldır tanışıyoruz. Bir çok ayrılık yaşadık tekrar barıştık bu döngüyle büyüdük aslında biz fakat son 1.5 Senedir hep birlikteyiz Ait olduğumuz yer evimizdeyiz. Biz birbirine çok aşık iki insanız Begüm benim için çok şey ifade ediyor o benim hayatımın merkezi o benim hayatım seni çok seviyorum aşkım. Begümle yollarımız bir imamhatip ortaokulunda kesişti onu gördüğüm ilk an gerçekten bu hayal dünyasında aşk diye bir şeyin gerçek olduğu idi, Begüme çok aşık olmuştum kendi kendimi yiyordum saf sevgiydi benimki :) ama bir sorunumuz vardı begümün bir sevgilisi vardı ne yapmalıydım sizce? A: Ona hislerini söyle B: Saygı duy ve geri çekil tabiki bende çok üzülürek geri çekildim ama her gün begüm için okula gidiyor her gün instagramını kontrol ediyor her gün fotoğrafına bakıcak kadar seviyordum begüm onu sevdiğimi bildiğini öğrendiği zaman bana olumlu yaklaşmıştı birbirimize göndermeli storyler atıyorduk birbirimize o kadar güzel zamanlardı ki aşk için herşey yapılıyor. Sonra begüm bana teklifim hala geçerli olup olmadığını sordu bende tabiki havalarda uçuşarak salonun etrafında kaç kez döndüğümü bilmeden tabiki evet dedim çok mutluydum sanki hayat benim olmuştu sonra her gün konuşmaya başladık tabiki begüm benimle zorla sebgili olmuş gibiydi her gün ben yazıyor ben soruyordum. taki 1 hafta sonra sabahın 06:00'da ''Burak ben ayrılmak istiyorum'' yazmasıyla son bulmuştu neden ayrılmıştı? Bişey mi yapmıştım hiç bir fikrim yoktu yapabildiğim tek şey aşık olduğum kızın arkasından hüngür hüngür ağlamaktı sonrasında beni her yerden engellediğini fark etmiştim hemen bi fake hesap açıp begüme istek attım yazdım nolur geri dön ben sana ne yaptım diye ve verdiği tek cevap 'Böyle olması gerekiyordu diyip engellemekti' artık herşey. Hayattan aldığım ilk sarsılmayla alışmaya çalışıyordum sonra zaman geçti kilolu burak zayıfladı saçlar uzadı eski buraktan bir haber artık acımasız birisi vardı tabi corona dönemi okullar kapalıydı değişim oldu. Sonrasında okullar açıldı okulun ilk günü okula gittim ne olursa olsun yinede gözüm begümü arıyordu yinede heyecanlanıyordum ama alıcağım bi intikam vardı. ilk teneffüse çıktığımız zaman arkadaşlarımla dolaşırken begüm ve tayfasınında dolaştığını fark ettim fakat hiç oralı olmadım tam önümüzde yürüyorlardı sonra begümün sadece bir kere arkaya bakmasıyla beni görüp çok şaşırıp tekrar arkaya bakması bir oldu sonrasında tabi konuşmalar falan derken biz yine sevgili olmuştuk. güzel gibi görünen ama içimde bi burukluk kalan ilişkimizin 1-2 hafta sonra bir anda ayrılmak istememle son buldu. Tabi kim kimden habersiz yıllar geçti ikimizinde ilişkileri oldu,takılmaları oldu ama biliyorduk ikimizin aşık olduğu kişiler birbirimizdi sonra hayat bizi tekrardan bir araya getirdi ne zorluklar çektik ama biz olduğumuz yerdeyiz evimizdeyiz. Şuan 1 Yıl 10 aylık iyi kötü giden bir ilişkimiz var. Begüm seni çok seviyorum. Sana çok aşığım iyi ki hayatımdasın, Rabbime ne kadar şükretsem azdır seninle ne kadar küssekte birbirimizi kırsakta sen benim balimsin her zamanda öyle kalıcaksın sevgilim.. İyiki varsin......"
    },
    fr: {
        welcomeMessage: "CE SITE EST SPÉCIALEMENT PRÉPARÉ POUR BEGÜM SEYHAN..",
        loveMessage: "Je t'aime chérie..",
        aboutTitle: "À propos",
        aboutText: "Nous nous connaissons depuis 6 ans. Nous avons vécu de nombreuses ruptures et réconciliations, et nous avons grandi à travers ce cycle. Cependant, nous sommes ensemble depuis les 1,5 dernières années. Nous sommes à la maison, là où nous appartenons. Nous sommes deux personnes profondément amoureuses l'une de l'autre. Begüm signifie beaucoup pour moi ; elle est le centre de ma vie. Je t'aime tellement, mon amour. J'ai rencontré Begüm pour la première fois dans une école secondaire religieuse. Le moment où je l'ai vue, j'ai réalisé que l'amour dans ce monde de rêve est réel. Je suis tombé follement amoureux de Begüm et je me déchirais à cause de mon amour pur pour elle. Mais il y avait un problème : Begüm avait un petit ami. Que devais-je faire ? A : Lui dire mes sentiments B : La respecter et reculer. Bien sûr, j'ai reculé avec une grande tristesse, mais je suis allé à l'école tous les jours pour Begüm, vérifié son Instagram tous les jours et je l'aimais tellement que je regardais sa photo tous les jours. Quand elle a découvert que je l'aimais, elle s'est approchée de moi positivement. Nous nous envoyions des histoires indirectes, et c'était des moments si beaux où tout était fait par amour. Ensuite, Begüm m'a demandé si ma proposition était toujours valide, et j'ai dit oui sans même réaliser combien de fois j'avais tourné autour de la pièce en l'air de joie. J'étais tellement heureux, c'était comme si la vie m'appartenait. Nous avons commencé à parler tous les jours. Bien sûr, c'était comme si Begüm était devenue ma petite amie à contrecœur ; j'étais celui qui écrivait et posait des questions tous les jours. Jusqu'à une semaine plus tard, à 6 heures du matin, elle a écrit : Burak, je veux rompre, et c'était fini. Pourquoi a-t-elle rompu ? Ai-je fait quelque chose ? Je n'en avais aucune idée. La seule chose que je pouvais faire était de pleurer mon cœur pour la fille que j'aimais. Après cela, j'ai réalisé qu'elle m'avait bloqué partout. J'ai immédiatement créé un faux compte, envoyé une demande à Begüm et écrit : "S'il te plaît, reviens, qu ai-je fait ? Sa seule réponse a été : Il devait en être ainsi,et elle m a bloqué à nouveau. C était tout. J essayais de m habituer au premier choc que j avais vécu dans la vie. Le temps a passé, le Burak potelé a maigri, les cheveux ont poussé et l ancien Burak était parti. Maintenant, une personne impitoyable était apparue. Pendant la période de corona, les écoles étaient fermées et des changements se sont produits. Ensuite, les écoles ont ouvert. Le premier jour d école, je suis allé, cherchant toujours Begüm, toujours excité, mais j avais une revanche à prendre. Quand nous sommes sortis pour la première pause, j ai remarqué Begüm et son groupe se promenant, mais je m en fichais. Ils marchaient juste devant nous. Begüm a regardé une fois en arrière, ma vu, a été très surprise et a regardé à nouveau. Bien sûr, après quelques conversations, nous étions de nouveau ensemble. Cela semblait bien, mais il y avait une tristesse en moi. Notre relation a pris fin 1 à 2 semaines plus tard, quand jai soudainement voulu rompre. Bien sûr, qui savait, des années ont passé, nous avons tous deux eu des relations et des aventures, mais nous savions que nous étions amoureux l un de l autre. Ensuite, la vie nous a ramenés ensemble. Nous avons affronté de nombreux défis, mais nous sommes là où nous appartenons, à la maison. Maintenant, nous sommes dans une relation bonne et mauvaise depuis 1 an et 10 mois. Begüm, je taime tellement. Je suis follement amoureux de toi. Je suis tellement heureux que tu sois dans ma vie. Je ne peux pas remercier Dieu assez pour toi. Peu importe combien nous nous disputons ou nous blessons, tu es mon amour, et tu le seras toujours, mon amour. Je suis tellement content que tu sois là..."
    },
    },
            
    de: {
        welcomeMessage: "DIESE SEITE IST SPEZIELL FÜR BEGÜM SEYHAN VORBEREITET..",
        loveMessage: "Ich liebe dich, Liebling..",
        aboutTitle: "Über",
        aboutText: "Wir kennen uns seit 6 Jahren. Wir haben viele Trennungen und Versöhnungen erlebt und sind durch diesen Kreislauf gewachsen. Aber in den letzten 1,5 Jahren sind wir immer zusammen gewesen. Wir sind zu Hause, wo wir hingehören. Wir sind zwei Menschen, die sehr ineinander verliebt sind. Begüm bedeutet mir sehr viel; sie ist das Zentrum meines Lebens. Ich liebe dich so sehr, mein Schatz. Ich habe Begüm das erste Mal in einer religiösen Mittelschule getroffen. Als ich sie sah, wurde mir klar, dass Liebe in dieser Traumwelt real ist. Ich habe mich wahnsinnig in Begüm verliebt und mich wegen meiner reinen Liebe zu ihr zerrissen. Aber es gab ein Problem: Begüm hatte einen Freund. Was sollte ich tun? A: Sag ihr meine Gefühle B: Respektiere sie und ziehe dich zurück. Natürlich habe ich mich mit großem Kummer zurückgezogen, aber ich ging jeden Tag wegen Begüm zur Schule, habe jeden Tag ihr Instagram geprüft und sie so sehr geliebt, dass ich jeden Tag ihr Foto angesehen habe. Als sie herausfand, dass ich sie liebte, näherte sie sich mir positiv. Wir haben uns gegenseitig indirekte Stories geschickt, und das waren so schöne Zeiten, als alles für die Liebe getan wurde. Dann fragte mich Begüm, ob mein Antrag noch gültig sei, und ich sagte ja, ohne zu merken, wie oft ich vor Freude durch den Raum gesprungen bin. Ich war so glücklich, es war, als ob das Leben mir gehört hätte. Wir begannen, jeden Tag zu sprechen. Natürlich war es so, als ob Begüm widerwillig meine Freundin geworden wäre; ich war derjenige, der jeden Tag schrieb und Fragen stellte. Bis eine Woche später, um 6:00 Uhr morgens, sie mir schrieb: Burak, ich möchte Schluss machen, und es war vorbei. Warum machte sie Schluss? Habe ich etwas getan? Ich hatte keine Ahnung. Das Einzige, was ich tun konnte, war, mein Herz für das Mädchen zu weinen, das ich liebte. Danach bemerkte ich, dass sie mich überall blockiert hatte. Ich habe sofort ein Fake-Konto erstellt, Begüm eine Anfrage geschickt und geschrieben: Bitte komm zurück, was habe ich getan? Ihre einzige Antwort war: Es musste so sein, und sie blockierte mich wieder. Das war alles. Ich versuchte, mich an den ersten Schock zu gewöhnen, den ich im Leben erlebt hatte. Die Zeit verging, der dicke Burak nahm ab, die Haare wuchsen, und der alte Burak war weg. Jetzt war eine gnadenlose Person aufgetaucht. Während der Corona-Zeit waren die Schulen geschlossen, und Veränderungen fanden statt. Dann öffneten die Schulen. Am ersten Schultag ging ich hin, immer noch auf der Suche nach Begüm, immer noch aufgeregt, aber ich hatte Rache zu nehmen. Als wir zur ersten Pause herauskamen, bemerkte ich Begüm und ihre Gruppe, die herumliefen, aber es war mir egal. Sie gingen direkt vor uns. Begüm schaute einmal zurück, sah mich, war sehr überrascht und schaute wieder zurück. Natürlich, nach einigen Gesprächen, waren wir wieder zusammen. Es schien schön, aber da war eine Traurigkeit in mir. Unsere Beziehung endete 1-2 Wochen später, als ich plötzlich Schluss machen wollte. Natürlich, wer wusste, Jahre vergingen, wir beide hatten Beziehungen und Affären, aber wir wussten, dass wir ineinander verliebt waren. Dann brachte uns das Leben wieder zusammen. Wir standen vielen Herausforderungen gegenüber, aber wir sind da, wo wir hingehören, zu Hause. Jetzt sind wir seit 1 Jahr und 10 Monaten in einer guten und schlechten Beziehung. Begüm, ich liebe dich so sehr. Ich bin wahnsinnig in dich verliebt. Ich bin so froh, dass du in meinem Leben bist. Ich kann Gott nicht genug für dich danken. Egal wie oft wir streiten oder uns verletzen, du bist mein Schatz, und du wirst es immer sein, mein Schatz. Ich bin so froh, dass du hier bist..."
    },
    it: {
        welcomeMessage: "QUESTO SITO È STATO PREPARATO APPOSITAMENTE PER BEGÜM SEYHAN..",
        loveMessage: "Ti amo cara..",
        aboutTitle: "Informazioni",
        aboutText: "Ci conosciamo da 6 anni. Abbiamo vissuto molte rotture e riconciliazioni, e siamo cresciuti attraverso questo ciclo. Tuttavia, negli ultimi 1,5 anni siamo sempre stati insieme. Siamo a casa, dove apparteniamo. Siamo due persone profondamente innamorate l'una dell'altra. Begüm significa molto per me; è il centro della mia vita. Ti amo così tanto, amore mio. Ho incontrato Begüm per la prima volta in una scuola media religiosa. Nel momento in cui l'ho vista, ho realizzato che l'amore in questo mondo dei sogni è reale. Mi sono innamorato follemente di Begüm e mi stavo distruggendo a causa del mio amore puro per lei. Ma c'era un problema: Begüm aveva un ragazzo. Cosa dovevo fare? A: Dirle i miei sentimenti B: Rispetta lei e fai un passo indietro. Ovviamente ho fatto un passo indietro con grande tristezza, ma andavo a scuola ogni giorno per Begüm, controllavo il suo Instagram ogni giorno e la amavo così tanto che guardavo la sua foto ogni giorno. Quando ha scoperto che la amavo, si è avvicinata a me positivamente. Ci inviavamo storie indirette, e quelli erano momenti così belli quando tutto veniva fatto per amore. Poi Begüm mi ha chiesto se la mia proposta fosse ancora valida, e ho detto sì senza nemmeno rendermi conto di quante volte avevo girato intorno alla stanza in aria per la gioia. Ero così felice, era come se la vita fosse mia. Abbiamo iniziato a parlare ogni giorno. Ovviamente era come se Begüm fosse diventata la mia ragazza con riluttanza; ero io quello che scriveva e faceva domande ogni giorno. Fino a una settimana dopo, alle 6:00 del mattino, ha scritto: Burak, voglio rompere, ed era finita. Perché ha rotto? Ho fatto qualcosa? Non avevo idea. L'unica cosa che potevo fare era piangere il mio cuore per la ragazza che amavo. Dopo di ciò, ho realizzato che mi aveva bloccato ovunque. Ho creato immediatamente un account falso, inviato una richiesta a Begüm e scritto: Per favore, torna, cosa ho fatto? La sua unica risposta è stata: Doveva essere così, e mi ha bloccato di nuovo. Questo era tutto. Stavo cercando di abituarmi al primo shock che avevo vissuto nella vita. Il tempo passava, Burak grasso dimagriva, i capelli crescevano e il vecchio Burak non c'era più. Ora era emersa una persona spietata. Durante il periodo della corona, le scuole erano chiuse e avvenivano cambiamenti. Poi le scuole aprivano. Il primo giorno di scuola, andai, ancora alla ricerca di Begüm, ancora eccitato, ma avevo una vendetta da prendere. Quando uscivamo per la prima pausa, notai Begüm e il suo gruppo che camminavano, ma non mi importava. Camminavano proprio davanti a noi. Begüm guardò indietro una volta, mi vide, rimase molto sorpresa e guardò di nuovo indietro. Ovviamente, dopo alcune conversazioni, eravamo di nuovo insieme. Sembrava bello, ma c'era una tristezza dentro di me. La nostra relazione finì 1-2 settimane dopo, quando improvvisamente volevo rompere. Ovviamente, chi sapeva, passavano anni, entrambi avevamo relazioni e avventure, ma sapevamo che eravamo innamorati l'uno dell'altro. Poi la vita ci riportava insieme. Abbiamo affrontato molte sfide, ma siamo dove apparteniamo, a casa. Ora siamo in una relazione buona e cattiva da 1 anno e 10 mesi. Begüm, ti amo così tanto. Sono follemente innamorato di te. Sono così felice che tu sia nella mia vita. Non posso ringraziare abbastanza Dio per te. Non importa quanto discutiamo o ci feriamo, sei il mio amore, e lo sarai sempre, amore mio. Sono così felice che tu sia qui..."
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
        aboutText: "我和我的女朋友认识了6年。我们经历了很多分分合合，但实际上我们在一起已经1.5年了。我们属于彼此的地方，就在我们的家里。我们是两个相爱的人，Begüm对我来说意义重大，她是我的生命中心，我的生命中的一切，我爱你，我的爱人。我和Begüm在一所伊玛目哈提普中学相遇，第一次见到她，我真的相信这个梦幻般的爱情世界是真实存在的，我深深地爱着Begüm，我把自己吃了，我的爱是纯真的:)但我们有一个问题，Begüm有一个男朋友，你觉得我该怎么办？A:告诉她你的感受 B:尊重并退出。当然，我非常伤心地退出了，但我每天都去学校为Begüm，每天都在查看她的Instagram，每天都会看她的照片，我爱Begüm，当她知道我爱她时，她对我表现得非常积极，我们互相发送了有关对方的故事，我们度过了如此美好的时光，为了爱情，我们可以做任何事情。然后，Begüm问我我的提议是否仍然有效，我当然是答应的，我不知道自己转了多少圈，我很高兴，好像生活已经属于我了，然后我们开始每天交谈，当然，Begüm像是被我迫使成为女朋友，我每天都在写，我问。直到一个星期后早上6:00，她写了“布拉克，我想分手”，这意味着什么？我没做错什么，我不知道，我能做的就是为了我爱的女孩大声哭泣，然后我意识到她从所有地方都把我阻止了，我立刻打开了一个假帐户向Begüm发送了一份请求，请回复我，我做了什么，并给了我一个答案“这是必须的”，现在一切都结束了。我努力适应生活的第一次震动，然后时间过去了，Burak变瘦了，头发长了，以前的Burak没了消息，现在有一个残酷的人，当然，疫情期间学校关闭了，有所变化。然后学校重新开放了，我去了学校，无论发生什么，我还是在寻找Begüm，我还是很激动，但我要报复。当我们第一次离开教室时，我注意到Begüm和她的团队在附近，但我完全没有在乎，他们就在我们前面走，然后Begüm只转身看了一眼，看到我很惊讶，又转身看了一眼，接着我们又是情侣了。我们看起来很好，但我们的关系在1-2周后突然结束了。毫无疑问，多年过去了，我们都有了我们的关系，我们知道我们相爱的人是对方，然后生活又把我们拉在一起，我们经历了很多困难，但我们在我们的地方，在我们的家里。现在我们有1年10个月的关系，有好有坏。Begüm我非常爱你。我非常爱你，我很高兴你在我的生活中，我要感谢我的主，我和你在一起，无论我们多么生气，我们总是彼此的宝贝，我的爱人.. 幸好你在这里......"
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

