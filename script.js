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
var languageEN = {
    welcomeMessage: "THIS SITE IS SPECIALLY PREPARED FOR BEGÜM SEYHAN..",
    loveMessage: "I love you my dear..",
    aboutTitle: "About",
    aboutText: "My girlfriend and I have known each other for 6 years. We have experienced many breakups and reunions, growing together in this cycle, but we have been together for the last 1.5 years. Our home is where we belong. We are two people deeply in love with each other. Begüm means a lot to me; she is the center of my life, she is my life. I love you so much, my love. Our paths crossed with Begüm in an imam hatip secondary school. The moment I saw her, I truly believed that love exists in this fantasy world. I was deeply in love with Begüm; I was eating myself up with pure love :) But we had a problem: Begüm had a boyfriend. What should I do, you think? A: Tell her your feelings. B: Respect her relationship and step back. Of course, I stepped back, heartbroken, but I went to school every day for Begüm, checked her Instagram every day, and looked at her photo every day. When she found out I loved her, she responded positively. We were sending indirect stories to each other, and those were such beautiful times. You do everything for love. Then Begüm asked if my proposal was still valid, and of course, I said yes, flying with joy. It felt like life had become mine. Then we started talking every day, but it was as if Begüm was forced to be with me. I was always the one texting and asking questions. Until a week later, at 06:00 in the morning, I received a message: 'Burak, I want to break up.' Why did she break up? Did I do something wrong? I had no idea. All I could do was cry my heart out for the girl I loved. Later, I realized she had blocked me everywhere. I immediately created a fake account, sent her a request, and asked her to come back, asking what I did wrong. She only replied, 'It had to be this way,' and blocked me again. That was it. Trying to cope with the first shock of life, time passed. Chubby Burak got slim, hair grew, and the old Burak was gone, replaced by a ruthless person. During the corona period, schools were closed, and there was a transformation. Then schools reopened. On the first day of school, I went there, still looking for Begüm and feeling excited, but I was ready for revenge. During the first recess, while walking around with my friends, I noticed Begüm and her group walking nearby. I didn't pay any attention to them. When Begüm looked back just once and saw me, she was very surprised and looked back again. Then, of course, we started talking and eventually got back together. It seemed nice, but there was still a lingering sadness in me. Our relationship ended 1-2 weeks later when I suddenly wanted to break up. Years passed without us knowing about each other. We both had relationships and flings, but we knew that we were the ones we were truly in love with. Then life brought us back together. We went through so many difficulties, but we are where we belong, at home. Now, we have been together for 1 year and 10 months, going through good and bad times. Begüm, I love you so much. I am deeply in love with you. I am so glad you are in my life. I thank God every day for you. Even if we argue and hurt each other, you are my darling and will always remain so, my love. I am so glad you exist...."
};
// İspanyolca
var languageES = {
    welcomeMessage: "ESTE SITIO ESTÁ ESPECIALMENTE PREPARADO PARA BEGÜM SEYHAN..",
    loveMessage: "Te amo mi querido..",
    aboutTitle: "Acerca de",
    aboutText: "Conozco a mi novia desde hace 6 años. Hemos pasado por muchas rupturas y nos hemos vuelto a juntar, creciendo a través de este ciclo. Sin embargo, hemos estado juntos durante los últimos 1.5 años. Estamos en casa, donde pertenecemos. Somos dos personas profundamente enamoradas. Begüm significa mucho para mí; ella es el centro de mi vida. Te amo mucho, mi amor. Begüm y yo nos conocimos en una escuela secundaria imam hatip. La primera vez que la vi, me di cuenta de que el amor en este mundo imaginario era real. Estaba muy enamorado de Begüm. Me consumía por dentro. Era un amor puro :) pero teníamos un problema, Begüm tenía un novio. ¿Qué debía hacer, qué piensas? A: Decirle mis sentimientos B: Respetar y retirarme. Por supuesto, me retiré con mucho dolor, pero iba a la escuela todos los días por Begüm, revisaba su Instagram todos los días, la amaba tanto. Cuando supo que la amaba, tuvo una actitud positiva hacia mí. Nos enviábamos historias el uno al otro, pasábamos momentos tan hermosos juntos. Por amor, se hace todo. Luego, Begüm me preguntó si mi propuesta seguía en pie, por supuesto, respondí que sí girando alrededor de la habitación con emoción. Estaba muy feliz, como si la vida fuera mía. Luego, comenzamos a hablar todos los días. Por supuesto, Begüm estaba conmigo como si se hubiera visto obligada a ser mi novia. Cada día, yo era el que escribía y preguntaba, hasta que una semana después, a las 06:00 de la mañana, escribió 'Burak, quiero romper'. ¿Por qué había roto? ¿Hice algo mal? No tenía idea. Todo lo que podía hacer era llorar amargamente por la chica de la que estaba enamorado. Luego, me di cuenta de que me había bloqueado en todas partes. Inmediatamente creé una cuenta falsa y envié una solicitud a Begüm. Le escribí, 'Por favor, vuelve, ¿qué te hice?' y su única respuesta fue 'Era necesario', y luego me bloqueó. Eso fue todo. Trataba de acostumbrarme a mi primer choque de la vida. Luego, el tiempo pasó. Burak, que estaba con sobrepeso, adelgazó. El cabello creció. Ya no había rastro del antiguo Burak. Se había convertido en una persona despiadada. Por supuesto, durante el período de corona, las escuelas estaban cerradas. Hubo cambios. Luego, las escuelas reabrieron. El primer día de escuela, fui a la escuela. No importaba lo que pasara, siempre buscaba a Begüm. Siempre estaba emocionado, pero tenía una venganza que tomar. Durante el primer recreo, mientras paseaba con mis amigos, noté que Begüm y su grupo también paseaban. Pero no me importó. Caminaban justo delante de nosotros. Luego, al verme por primera vez, Begüm se sorprendió mucho e inmediatamente miró hacia atrás. Luego, por supuesto, hablamos y volvimos a ser pareja. Una relación que parecía bonita pero que dejaba una amargura en mí terminó después de 1 a 2 semanas cuando de repente quise romper. Por supuesto, los años pasaron sin que supiéramos más. Ambos tuvimos relaciones y citas, pero sabíamos que las personas de las que estábamos enamorados éramos el uno del otro. Luego, la vida nos reunió de nuevo. Pasamos por muchas dificultades, pero estamos donde estamos, en casa. Ahora, tenemos una relación de 1 año y 10 meses, con altibajos. Begüm, te amo tanto. Estoy tan enamorado de ti. Afortunadamente estás en mi vida. Agradezco a Dios por tenerte, incluso si nos peleamos y nos lastimamos. Eres mi amada y siempre lo serás, mi amor... Afortunadamente existes..."
};

// Fransızca
var languageFR = {
    welcomeMessage: "CE SITE EST SPÉCIALEMENT PRÉPARÉ POUR BEGÜM SEYHAN..",
    loveMessage: "Je t'aime mon cher..",
    aboutTitle: "À propos de",
    aboutText: "Je connais ma petite amie depuis 6 ans. Nous avons traversé de nombreuses ruptures et nous nous sommes remis ensemble, grandissant à travers ce cycle. Cependant, nous sommes ensemble depuis les 1,5 dernières années. Nous sommes chez nous, là où nous appartenons. Nous sommes deux personnes profondément amoureuses. Begüm signifie beaucoup pour moi ; elle est le centre de ma vie. Je t'aime tellement, mon amour. Begüm et moi nous sommes rencontrés dans un collège imam hatip. La première fois que je l'ai vue, j'ai réalisé que l'amour dans ce monde imaginaire était réel. J'étais très amoureux de Begüm. Je me rongeais les sangs. C'était un amour pur :) mais nous avions un problème, Begüm avait un petit ami. Que devais-je faire à votre avis ? A : Lui dire mes sentiments B : Respecter et me retirer. Bien sûr, je me suis retiré avec beaucoup de peine, mais je suis allé à l'école tous les jours pour Begüm, je vérifiais son Instagram tous les jours, je l'aimais tellement. Quand elle a su que je l'aimais, elle a eu une attitude positive envers moi. Nous nous envoyions des stories l'un à l'autre, nous passions de si beaux moments ensemble. Pour l'amour, on fait tout. Ensuite, Begüm m'a demandé si ma proposition était toujours valable, bien sûr, j'ai répondu oui en tournant autour de la pièce avec excitation. J'étais très heureux, c'était comme si la vie était à moi. Ensuite, nous avons commencé à parler tous les jours. Bien sûr, Begüm était avec moi comme si elle avait forcé à devenir ma petite amie. Chaque jour, c'est moi qui écrivais et posais des questions, jusqu'à une semaine plus tard, à 06h00 du matin, quand elle a écrit 'Burak, je veux rompre'. Pourquoi avait-elle rompu ? Avais-je fait quelque chose de mal ? Je n'en avais aucune idée. Tout ce que je pouvais faire, c'était pleurer amèrement après la fille dont j'étais amoureux. Ensuite, j'ai réalisé qu'elle m'avait bloqué partout. J'ai immédiatement créé un faux compte et envoyé une demande à Begüm. Je lui ai écrit, 'S'il te plaît, reviens, qu'est-ce que je t'ai fait ?' et sa seule réponse a été 'C'était nécessaire', puis elle m'a bloqué. C'était tout. J'essayais de m'habituer à mon premier choc de la vie. Ensuite, le temps a passé. Burak, qui était en surpoids, a maigri. Les cheveux ont poussé. Il n'y avait plus de traces de l'ancien Burak. Il était devenu une personne impitoyable. Bien sûr, pendant la période corona, les écoles étaient fermées. Il y a eu des changements. Ensuite, les écoles ont rouvert. Le premier jour d'école, je suis allé à l'école. Peu importe ce qui se passait, je cherchais toujours Begüm. J'étais toujours excité, mais j'avais une vengeance à prendre. Lors de la première récréation, alors que je me promenais avec mes amis, j'ai remarqué que Begüm et son groupe se promenaient aussi. Mais je ne me suis pas soucié d'eux. Ils marchaient juste devant nous. Ensuite, en me voyant pour la première fois, Begüm a été très surprise et a immédiatement regardé en arrière. Ensuite, bien sûr, nous avons parlé et nous étions de nouveau en couple. Une relation qui semblait belle mais qui laissait une amertume en moi s'est terminée après 1 à 2 semaines lorsque j'ai soudainement voulu rompre. Bien sûr, les années ont passé sans que nous en sachions plus. Nous avons tous les deux eu des relations et des fréquentations, mais nous savions que les personnes dont nous étions amoureux étaient l'un l'autre. Ensuite, la vie nous a réunis à nouveau. Nous avons traversé de nombreuses difficultés, mais nous sommes là où nous sommes, chez nous. Maintenant, nous avons une relation de 1 an et 10 mois, avec des hauts et des bas. Begüm, je t'aime tellement. Je suis tellement amoureux de toi. Heureusement que tu es dans ma vie. Je remercie Dieu de t'avoir, même si nous nous disputons et nous blessons. Tu es ma chérie et tu le seras toujours, mon amour... Heureusement que tu existes..."
};

// Almanca
var languageDE = {
    welcomeMessage: "DIESE WEBSITE IST SPEZIELL FÜR BEGÜM SEYHAN VORBEREITET..",
    loveMessage: "Ich liebe dich mein Lieber..",
    aboutTitle: "Über",
    aboutText: "Meine Freundin und ich kennen uns seit 6 Jahren. Wir haben viele Trennungen erlebt, uns wieder versöhnt und sind dadurch gewachsen. Seit den letzten 1,5 Jahren sind wir jedoch ununterbrochen zusammen. Unser Zuhause ist dort, wo wir hingehören. Wir sind zwei Menschen, die sich sehr lieben. Begüm bedeutet mir sehr viel. Sie ist der Mittelpunkt meines Lebens. Ich liebe dich so sehr, meine Liebe. Unsere Wege haben sich in einer Imam-Hatip-Schule gekreuzt. Als ich sie das erste Mal sah, erkannte ich, dass diese Liebe in dieser Traumwelt wirklich existiert. Ich war so sehr in Begüm verliebt. Es war reine Liebe von meiner Seite :) Aber wir hatten ein Problem. Begüm hatte einen Freund. Was denkst du, was ich tun sollte? A: Sag ihr deine Gefühle B: Respektiere es und zieh dich zurück Natürlich bin ich sehr traurig zurückgetreten. Aber ich bin jeden Tag für Begüm zur Schule gegangen, habe jeden Tag ihr Instagram überprüft und sie so sehr geliebt, dass ich mir ihre Fotos angesehen habe. Als Begüm erfuhr, dass ich sie liebe, kam sie positiv auf mich zu. Wir haben uns gegenseitig Geschichten geschickt und schöne Zeiten miteinander verbracht. Für die Liebe tut man alles. Dann fragte mich Begüm, ob mein Antrag immer noch gültig sei. Natürlich habe ich ja gesagt und war sehr glücklich, als ob mein Leben meins wäre. Dann haben wir jeden Tag angefangen zu reden. Natürlich schien Begüm wie meine Freundin gezwungen zu sein. Ich habe jeden Tag geschrieben, ich habe gefragt. Dann, eine Woche später um 06:00 Uhr morgens, schrieb sie Burak, ich möchte mich trennen. Warum haben wir uns getrennt? Habe ich etwas falsch gemacht? Ich hatte keine Ahnung. Das Einzige, was ich tun konnte, war, vor dem Mädchen, das ich liebe, zu weinen. Dann habe ich bemerkt, dass sie mich überall blockiert hat. Ich habe sofort ein Fake-Konto erstellt, Begüm eine Anfrage geschickt und geschrieben, bitte komm zurück, was habe ich dir angetan? Ihre einzige Antwort war "Es musste so sein" und sie hat mich blockiert. Das war alles. Ich versuchte, mich zum ersten Mal im Leben an den Schock zu gewöhnen. Dann verging die Zeit. Der dicke Burak wurde dünn. Die Haare wurden lang. Der alte Burak war jetzt weg. Er wurde zu einer gnadenlosen Person. Natürlich waren die Schulen während der Corona-Zeit geschlossen. Es gab Veränderungen. Dann wurden die Schulen wieder geöffnet. Am ersten Schultag ging ich zur Schule. Wie auch immer, ich suchte immer nach Begüm. Ich war immer aufgeregt. Aber ich hatte Rache zu nehmen. Als ich während der ersten Pause mit meinen Freunden spazieren ging, bemerkte ich, dass Begüm und ihre Gruppe auch spazieren gingen. Aber ich habe sie überhaupt nicht beachtet. Sie gingen direkt vor uns her. Dann sah Begüm mich zum ersten Mal, wurde sehr überrascht und drehte sich sofort um. Dann, natürlich, haben wir gesprochen und wurden wieder Liebende. Es sah schön aus, aber in mir blieb eine Bitterkeit zurück, als unsere Beziehung 1-2 Wochen später plötzlich enden wollte. Natürlich verging einige Jahre, ohne voneinander zu wissen. Wir hatten beide Beziehungen, wir haben uns getroffen, aber wir wussten, dass wir uns gegenseitig lieben. Dann hat das Leben uns wieder zusammengebracht. Wir haben viele Schwierigkeiten durchgemacht, aber wir sind dort, wo wir hingehören, zu Hause. Jetzt haben wir eine Beziehung von 1 Jahr und 10 Monaten. Begüm, ich liebe dich sehr. Ich bin sehr verliebt in dich. Ich bin glücklich, dass du in meinem Leben bist. Selbst wenn wir uns streiten und uns verletzen, bin ich Gott dankbar. Du bist meine süße Person und wirst es immer sein, meine Liebe... Ich bin froh, dass du da bist....."
};

// İtalyanca
var languageIT = {
    welcomeMessage: "QUESTO SITO È SPECIALMENTE PREPARATO PER BEGÜM SEYHAN..",
    loveMessage: "Ti amo mio caro..",
    aboutTitle: "A proposito di",
    aboutText: "Conosco la mia ragazza da 6 anni. Abbiamo attraversato molte rotture e ci siamo rimessi insieme, crescendo attraverso questo ciclo. Tuttavia, siamo stati insieme negli ultimi 1,5 anni. Siamo a casa, dove apparteniamo. Siamo due persone profondamente innamorate. Begüm significa molto per me; è il centro della mia vita. Ti amo così tanto, amore mio. Begüm e io ci siamo incontrati in una scuola media imam hatip. La prima volta che l'ho vista, ho capito che l'amore in questo mondo dei sogni era reale. Ero molto innamorato di Begüm. Mi stavo consumando dall'interno. Era un amore puro :) ma avevamo un problema, Begüm aveva un ragazzo. Cosa avrei dovuto fare secondo te? A: Dirle i miei sentimenti B: Rispettare e ritirarmi. Ovviamente mi sono ritirato con molta tristezza, ma andavo a scuola ogni giorno per Begüm, controllavo il suo Instagram ogni giorno, la amavo così tanto. Quando ha saputo che l'amavo, ha avuto un atteggiamento positivo verso di me. Ci mandavamo storie l'un l'altro, passavamo momenti così belli insieme. Per amore, si fa tutto. Poi, Begüm mi ha chiesto se la mia proposta era ancora valida, ovviamente, ho risposto di sì girando per la stanza con eccitazione. Ero molto felice, era come se la vita fosse mia. Poi abbiamo iniziato a parlare ogni giorno. Ovviamente, Begüm era con me come se fosse stata costretta a diventare la mia ragazza. Ogni giorno, ero io a scrivere e fare domande, fino a una settimana dopo, alle 06:00 del mattino, quando ha scritto 'Burak, voglio rompere'. Perché aveva rotto? Avevo fatto qualcosa di sbagliato? Non ne avevo idea. Tutto quello che potevo fare era piangere amaramente per la ragazza di cui ero innamorato. Poi ho scoperto che mi aveva bloccato ovunque. Ho immediatamente creato un account falso e inviato una richiesta a Begüm. Le ho scritto, 'Per favore, torna, cosa ti ho fatto?' e la sua unica risposta è stata 'Era necessario', poi mi ha bloccato. Era tutto. Cercavo di abituarmi al mio primo shock della vita. Poi il tempo è passato. Burak, che era in sovrappeso, è dimagrito. I capelli sono cresciuti. Non c'era più traccia del vecchio Burak. Era diventato una persona spietata. Ovviamente, durante il periodo del corona, le scuole erano chiuse. Ci sono stati cambiamenti. Poi le scuole hanno riaperto. Il primo giorno di scuola, sono andato a scuola. Non importava cosa accadesse, cercavo sempre Begüm. Ero sempre emozionato, ma avevo una vendetta da prendere. Durante la prima pausa, mentre passeggiavo con i miei amici, ho notato che Begüm e il suo gruppo passeggiavano anche loro. Ma non mi sono preoccupato di loro. Camminavano proprio davanti a noi. Poi, vedendomi per la prima volta, Begüm è rimasta molto sorpresa e ha immediatamente guardato indietro. Poi, ovviamente, abbiamo parlato e siamo tornati insieme. Una relazione che sembrava bella ma che lasciava un'amarezza dentro di me è finita dopo 1-2 settimane quando improvvisamente ho voluto rompere. Ovviamente, gli anni sono passati senza che sapessimo altro. Entrambi abbiamo avuto relazioni e frequentazioni, ma sapevamo che le persone di cui eravamo innamorati eravamo l'un l'altro. Poi, la vita ci ha riuniti di nuovo. Abbiamo attraversato molte difficoltà, ma siamo dove siamo, a casa. Ora abbiamo una relazione di 1 anno e 10 mesi, con alti e bassi. Begüm, ti amo così tanto. Sono così innamorato di te. Fortunatamente sei nella mia vita. Ringrazio Dio per averti, anche se litighiamo e ci facciamo del male. Sei il mio tesoro e lo sarai sempre, amore mio... Fortunatamente esisti...."
};

// Rusça
var languageRU = {
    welcomeMessage: "ЭТОТ САЙТ СПЕЦИАЛЬНО ПОДГОТОВЛЕН ДЛЯ BEGÜM SEYHAN..",
    loveMessage: "Я люблю тебя, дорогая..",
    aboutTitle: "О",
    aboutText: "Я знаю свою девушку уже 6 лет. Мы пережили множество разрывов и снова сошлись, пройдя через этот цикл. Однако, мы вместе последние 1,5 года. Мы дома, там, где нам место. Мы двое людей, которые глубоко влюблены друг в друга. Бегюм много значит для меня; она - центр моей жизни. Я тебя очень люблю, моя любовь. Мы с Бегюм встретились в средней школе имам-хатип. Когда я увидел ее впервые, я понял, что любовь в этом мире грез реальна. Я был очень влюблен в Бегюм. Я изводил себя. Это была чистая любовь :) но у нас была проблема, у Бегюм был парень. Что мне следовало сделать, как ты думаешь? А: Сказать ей о своих чувствах Б: Уважать и отступить. Конечно, я отступил с большой грустью, но ходил в школу каждый день ради Бегюм, каждый день проверял ее Instagram, я ее так любил. Когда она узнала, что я ее люблю, она положительно ко мне отнеслась. Мы отправляли друг другу истории, мы проводили так много прекрасных моментов вместе. Ради любви можно сделать все. Потом Бегюм спросила меня, актуально ли еще мое предложение, конечно, я ответил да, кружась по комнате от возбуждения. Я был очень счастлив, как будто жизнь была моей. Потом мы начали говорить каждый день. Конечно, Бегюм была со мной, как будто ее заставили стать моей девушкой. Каждый день писал и спрашивал я, пока через неделю, в 06:00 утра, она не написала 'Бурак, я хочу расстаться'. Почему она рассталась? Я что-то сделал не так? У меня не было никакой идеи. Все, что я мог сделать, это горько плакать за девочкой, в которую я был влюблен. Потом я обнаружил, что она заблокировала меня везде. Я немедленно создал фальшивую учетную запись и отправил запрос Бегюм. Я написал ей, 'Пожалуйста, вернись, что я тебе сделал?' и ее единственный ответ был 'Так было нужно', а потом она меня заблокировала. Это было все. Я пытался привыкнуть к своему первому шоку в жизни. Потом время прошло. Бурак, который был с лишним весом, похудел. Волосы отросли. От старого Бурака не осталось и следа. Он стал безжалостным человеком. Конечно, во время коронапериода школы были закрыты. Произошли изменения. Потом школы снова открылись. В первый день школы я пошел в школу. Неважно, что происходило, я всегда искал Бегюм. Я всегда был взволнован, но у меня была месть. Во время первой перемены, когда я прогуливался с друзьями, я заметил, что Бегюм и ее группа тоже прогуливаются. Но я не обратил на них внимания. Они шли прямо перед нами. Потом, увидев меня впервые, Бегюм была очень удивлена и сразу же оглянулась. Потом, конечно, мы поговорили и снова стали парой. Отношения, которые казались красивыми, но оставляли горечь внутри меня, закончились через 1-2 недели, когда я внезапно захотел расстаться. Конечно, годы прошли без того, чтобы мы что-то знали. У нас обоих были отношения и свидания, но мы знали, что те, кого мы любили, были друг для друга. Потом жизнь снова свела нас вместе. Мы прошли через много трудностей, но мы там, где мы есть, дома. Сейчас у нас отношения длиной 1 год и 10 месяцев, с взлетами и падениями. Бегюм, я тебя очень люблю. Я так в тебя влюблен. К счастью, ты в моей жизни. Я благодарю Бога за то, что ты у меня есть, даже если мы ссоримся и обижаем друг друга. Ты мое сокровище и всегда им будешь, моя любовь... К счастью, ты существуешь.."
};

// Arapça
var languageAR = {
    welcomeMessage: "هذا الموقع محضر خصيصا ل BEGÜM SEYHAN..",
    loveMessage: "أحبك يا عزيزي..",
    aboutTitle: "حول",
    aboutText: "لقد عرفت حبيبتي لمدة 6 سنوات. مررنا بالعديد من الانفصالات وعدنا معًا، ونمونا من خلال هذه الدورة. ومع ذلك، كنا معًا خلال العام والنصف الماضيين. نحن في المنزل، حيث ننتمي. نحن شخصان يعشقان بعضهما بعمق. بيجوم تعني لي الكثير؛ هي مركز حياتي. أحبك كثيرًا، حبي. التقيت بيجوم في مدرسة إعدادية إمام خطيب. عندما رأيتها لأول مرة، أدركت أن الحب في هذا العالم الخيالي كان حقيقيًا. كنت مغرمًا جدًا ببيجوم. كنت أستهلك نفسي. كان حبي بريئًا :) لكن كان لدينا مشكلة، بيجوم كان لديها حبيب. ماذا كان يجب أن أفعل برأيك؟ أ: أخبرها بمشاعري ب: أحترم وأتراجع. بالطبع، تراجعت بحزن شديد، لكني كنت أذهب إلى المدرسة كل يوم من أجل بيجوم، كنت أتحقق من إنستجرامها كل يوم، كنت أحبها كثيرًا. عندما عرفت أنني أحبها، كانت إيجابية تجاهي. كنا نرسل لبعضنا البعض قصصًا، كنا نقضي لحظات جميلة جدًا معًا. من أجل الحب، يُفعل كل شيء. ثم سألتني بيجوم إذا كان عرضي لا يزال قائمًا، بالطبع، أجبت بنعم وأنا أدور حول الغرفة بحماس. كنت سعيدًا جدًا، وكأن الحياة كانت لي. ثم بدأنا نتحدث كل يوم. بالطبع، كانت بيجوم معي كما لو كانت مجبرة على أن تكون حبيبتي. كل يوم، كنت أنا الذي يكتب ويطرح الأسئلة، حتى بعد أسبوع واحد، في الساعة 06:00 صباحًا، كتبت 'براك، أريد أن ننفصل'. لماذا انفصلت؟ هل فعلت شيئًا خاطئًا؟ لم يكن لدي أي فكرة. كل ما يمكنني فعله هو البكاء بمرارة بعد الفتاة التي كنت مغرمًا بها. ثم اكتشفت أنها حظرتني في كل مكان. على الفور أنشأت حسابًا وهميًا وأرسلت طلبًا لبيجوم. كتبت لها، 'من فضلك، عودي، ماذا فعلت لك؟' وكانت إجابتها الوحيدة 'كان يجب أن يحدث ذلك' ثم حظرتني. كان هذا كل شيء. كنت أحاول التعود على أول صدمة في حياتي. ثم مرت الأيام. فقد براك الذي كان يعاني من زيادة الوزن وزنه. نمت شعري. لم يعد هناك أي أثر لبراك القديم. أصبح شخصًا بلا رحمة. بالطبع، خلال فترة كورونا، كانت المدارس مغلقة. حدثت تغييرات. ثم أعيد فتح المدارس. في اليوم الأول من المدرسة، ذهبت إلى المدرسة. بغض النظر عما يحدث، كنت دائمًا أبحث عن بيجوم. كنت دائمًا متحمسًا، لكن كان لدي انتقام لأخذه. خلال الفسحة الأولى، بينما كنت أتجول مع أصدقائي، لاحظت أن بيجوم وجماعتها يتجولون أيضًا. لكنني لم أهتم بهم. كانوا يمشون أمامنا مباشرة. ثم، عندما رأتني لأول مرة، اندهشت كثيرًا ونظرت إلى الوراء فورًا. ثم بالطبع تحدثنا وأصبحنا زوجين مرة أخرى. علاقة بدت جميلة لكنها تركت مرارة في داخلي انتهت بعد 1-2 أسابيع عندما فجأة أردت الانفصال. بالطبع، مرت السنوات دون أن نعرف أكثر. كلاهما كان لديه علاقات ومواعيد، لكننا كنا نعلم أن الأشخاص الذين كنا مغرمين بهم كانوا بعضنا البعض. ثم، جمعتنا الحياة معًا مرة أخرى. مررنا بالكثير من الصعوبات، لكننا في المكان الذي نحن فيه، في منزلنا. الآن، لدينا علاقة استمرت لمدة عام و10 أشهر، مع ارتفاعات وانخفاضات. بيجوم، أحبك كثيرًا. أنا مغرم بك جدًا. لحسن الحظ أنك في حياتي. أشكر الله على وجودك، حتى لو تشاجرنا وآذينا بعضنا البعض. أنت حبيبتي وستظل دائمًا كذلك، حبي... لحسن الحظ أنك موجودة....."
};

// Japonca
var languageJA = {
    welcomeMessage: "このサイトは BEGÜM SEYHAN のために特別に準備されています..",
    loveMessage: "私はあなたが大好き..",
    aboutTitle: "約",
    aboutText: "私の彼女と私は6年前からの知り合いです。私たちは多くの別れを経験し、再び一緒になり、このサイクルを通じて成長してきました。しかし、過去1.5年間はずっと一緒にいます。私たちは家にいます、私たちのいるべき場所にいます。私たちは深く愛し合っている二人です。ベグムは私にとって非常に重要な存在です。彼女は私の人生の中心です。ベグム、愛しています。ベグムと私の道はイマムハティプ中学校で交わりました。彼女を初めて見た瞬間、この夢の世界で愛というものが現実であると感じました。私はベグムに非常に恋をしていました。自分を悩ませるほどでした。それは純粋な愛でした :) しかし、私たちには問題がありました。ベグムには彼氏がいました。どうすべきだったでしょうか？ A: 彼女に自分の気持ちを伝える B: 敬意を払い身を引く。もちろん、非常に悲しく身を引きましたが、毎日ベグムのために学校に通い、毎日彼女のインスタグラムをチェックし、彼女の写真を見るほどに彼女を愛していました。ベグムが私の気持ちを知った時、彼女は私に前向きな態度を示しました。私たちはお互いにストーリーを送り合い、とても素晴らしい時間を過ごしました。愛のために何でもします。その後、ベグムは私に私の提案がまだ有効かどうかを尋ねました。当然、私は喜びで部屋の中を飛び回りながら「はい」と答えました。私はとても幸せでした、まるで人生が私のものになったかのようでした。それから毎日話すようになりました。もちろん、ベグムは無理やり私の彼女になったかのようでした。毎日私がメッセージを送り、質問をしていました。しかし、1週間後の朝6時、彼女は「バラク、別れたい」と書いてきました。なぜ別れたのでしょうか？何か間違ったことをしたのでしょうか？全くわかりませんでした。私にできる唯一のことは、愛する人の後ろで泣くことでした。その後、彼女が私をすべての場所でブロックしていることに気付きました。すぐに偽アカウントを作り、ベグムにリクエストを送りました。彼女に「戻ってきて、私は何をしたの？」と書きました。彼女の唯一の答えは「そうする必要があった」そして私をブロックしました。それが全てでした。私は人生で初めてのショックに慣れようとしていました。その後、時間が経ちました。太っていたバラクは痩せ、髪も伸びました。もう昔のバラクは存在しませんでした。冷酷な人間になっていました。もちろん、コロナ期間中は学校が閉鎖されていました。変化が起こりました。その後、学校が再開されました。学校の初日に、私は学校に行きました。何があっても、ベグムを探していました。いつも興奮していましたが、復讐するつもりでした。最初の休み時間に友達と歩いていると、ベグムとその仲間が歩いていることに気付きました。しかし、私は気にしませんでした。彼らは私たちの前を歩いていました。すると、ベグムが私を見て驚いて振り返りました。その後、もちろん、話をして再び恋人同士になりました。美しいように見えるけれども心にわだかまりが残る関係は、1〜2週間後に私が突然別れたいと言ったことで終わりました。もちろん、お互い知らないまま何年も過ぎました。私たちはそれぞれ関係を持ちましたが、お互いに愛していたのは私たちだと知っていました。その後、再び人生が私たちを一緒にしました。多くの困難を乗り越えましたが、今の場所にいます、家にいます。現在、私たちは1年10ヶ月の関係を持っています、良い時も悪い時も。ベグム、私はあなたをとても愛しています。私はあなたに夢中です。あなたが私の人生にいてくれて幸運です。神に感謝しています、たとえ私たちが喧嘩し、お互いを傷つけたとしても。あなたは私の宝物であり、常にそうであり続けるでしょう、愛する人... あなたが存在してくれて幸運です..."
};

// Korece
var languageKO = {
    welcomeMessage: "이 사이트는 BEGÜM SEYHAN을 위해 특별히 준비되었습니다..",
    loveMessage: "나는 당신을 사랑해..",
    aboutTitle: "약",
    aboutText: "나는 내 여자친구를 6년 동안 알고 지냈습니다. 우리는 많은 이별을 겪었고 다시 만났으며, 이 과정을 통해 성장했습니다. 하지만 지난 1.5년 동안 우리는 항상 함께 있었습니다. 우리는 우리가 속한 집에 있습니다. 우리는 서로 깊이 사랑하는 두 사람입니다. 베굼은 나에게 많은 것을 의미합니다. 그녀는 내 삶의 중심입니다. 사랑하는 사람아, 나는 너를 매우 사랑해. 베굼과 나는 이맘 하티프 중학교에서 만났습니다. 처음 그녀를 봤을 때, 나는 이 꿈의 세계에서 사랑이라는 것이 진짜라는 것을 깨달았습니다. 나는 베굼을 매우 사랑하게 되었습니다. 나는 스스로를 갉아먹고 있었습니다. 그것은 순수한 사랑이었습니다 :) 하지만 문제가 있었습니다. 베굼에게는 남자친구가 있었습니다. 당신 생각에는 내가 무엇을 해야 했을까요? A: 그녀에게 내 감정을 말해라 B: 존중하고 물러나라. 물론, 나는 매우 슬프게 물러났습니다. 하지만 매일 베굼을 위해 학교에 가고, 매일 그녀의 인스타그램을 확인하고, 그녀의 사진을 볼 정도로 사랑했습니다. 베굼이 내가 그녀를 사랑한다는 것을 알았을 때, 그녀는 나에게 긍정적으로 다가왔습니다. 우리는 서로에게 이야기를 보내며 아주 멋진 시간을 보냈습니다. 사랑을 위해서는 무엇이든 할 수 있습니다. 그런 다음 베굼은 나에게 내 제안이 여전히 유효한지 물었습니다. 물론, 나는 방 안을 날아다니며 '네'라고 대답했습니다. 나는 매우 행복했습니다. 마치 삶이 내 것이 된 것 같았습니다. 그런 다음 우리는 매일 이야기하기 시작했습니다. 물론, 베굼은 마치 억지로 내 여자친구가 된 것처럼 보였습니다. 매일 내가 글을 쓰고 질문을 했습니다. 그러다 일주일 후 아침 6시에 그녀는 '부락, 나는 헤어지고 싶어'라고 썼습니다. 왜 헤어졌을까요? 내가 뭔가 잘못했을까요? 전혀 몰랐습니다. 내가 할 수 있는 유일한 일은 사랑하는 소녀 뒤에서 울부짖는 것이었습니다. 그 후, 나는 그녀가 모든 곳에서 나를 차단한 것을 발견했습니다. 나는 즉시 가짜 계정을 만들고 베굼에게 요청을 보냈습니다. '제발 돌아와, 내가 너에게 무엇을 했어?'라고 썼습니다. 그녀의 유일한 대답은 '그럴 필요가 있었어'였고, 그녀는 나를 차단했습니다. 그게 전부였습니다. 나는 인생에서 처음으로 충격에 익숙해지려고 노력하고 있었습니다. 그런 다음 시간이 흘렀습니다. 뚱뚱했던 부락은 살이 빠졌습니다. 머리가 길어졌습니다. 이제 옛 부락은 없었습니다. 그는 무자비한 사람이 되었습니다. 물론, 코로나 기간 동안 학교가 폐쇄되었습니다. 변화가 일어났습니다. 그런 다음 학교가 다시 열렸습니다. 학교 첫날, 나는 학교에 갔습니다. 무슨 일이 있어도 나는 항상 베굼을 찾고 있었습니다. 나는 항상 흥분했습니다. 하지만 복수할 것이 있었습니다. 첫 휴식 시간에 친구들과 산책하는 동안, 나는 베굼과 그녀의 그룹이 산책하는 것을 발견했습니다. 하지만 나는 그들에게 전혀 신경 쓰지 않았습니다. 그들은 우리 바로 앞에서 걷고 있었습니다. 그러다 베굼이 나를 처음 보고 매우 놀라서 즉시 뒤돌아보았습니다. 그 후, 물론, 우리는 이야기하고 다시 연인이 되었습니다. 아름다워 보이지만 내 안에 쓰라린 관계는 1~2주 후에 내가 갑자기 헤어지고 싶다고 말하면서 끝났습니다. 물론, 서로 소식을 모른 채로 몇 년이 흘렀습니다. 우리는 각자 관계를 맺었지만, 우리가 사랑하는 사람은 서로라는 것을 알고 있었습니다. 그러다 인생이 다시 우리를 함께 엮었습니다. 우리는 많은 어려움을 겪었지만, 우리가 있는 곳, 우리 집에 있습니다. 지금 우리는 1년 10개월의 관계를 유지하고 있습니다. 좋은 때와 나쁜 때가 있습니다. 베굼, 나는 너를 매우 사랑해. 나는 너에게 매우 빠져 있어. 네가 내 삶에 있어서 운이 좋다. 우리가 싸우고 서로를 상처 주더라도, 나는 신에게 감사해. 너는 나의 사랑스러운 사람이고 항상 그럴 것이다, 사랑하는 사람... 네가 있어서 운이 좋다..."
};

// Çince
var languageZH = {
    welcomeMessage: "这个网站是专门为 BEGÜM SEYHAN 准备的..",
    loveMessage: "我爱你我的亲爱的..",
    aboutTitle: "关于",
    aboutText: "我认识我的爱人已经6年了。我们经历了许多分手，然后又和好了，在这个循环中成长。然而，在过去的1.5年里，我们一直在一起。我们在家，这是我们应该在的地方。我们是两个深深爱着对方的人。贝古姆对我来说意义重大；她是我生活的中心。亲爱的，我非常爱你。贝古姆和我在一所伊玛目哈提普中学相遇。我第一次见到她时，我意识到这个梦幻世界中的爱是真实的。我非常爱贝古姆。我几乎要自我吞噬。这是一种纯洁的爱:) 但我们有一个问题，贝古姆有一个男朋友。你觉得我该怎么办？ A: 告诉她我的感受 B: 尊重并退后。当然，我带着很大的悲伤退后了，但我每天都为了贝古姆去学校，每天检查她的Instagram，每天看她的照片。我爱贝古姆。当她知道我爱她时，她对我有积极的态度。我们互相发送故事，那些日子真是美好。为了爱，可以做任何事情。然后贝古姆问我，我的提议是否仍然有效，当然，我回答是，并兴奋地在房间里转了几圈。我很高兴，好像生活是我的。然后我们每天都开始交谈。当然，贝古姆和我在一起，好像她被迫成为我的女朋友。每天都是我写信，我问问题。直到一周后早上06:00，她写道‘布拉克，我想分手’。为什么她分手了？我做错了什么吗？我完全不知道。我唯一能做的就是在我爱上的女孩身后痛哭。然后，我发现她把我所有地方都拉黑了。我立即创建了一个假账户，并向贝古姆发送了请求。我写道‘请回来，我做了什么？’ 她唯一的回答是‘这是必须的’，然后她把我拉黑了。这就是一切。我在尝试适应我人生中第一次的震惊。然后时间过去了。曾经肥胖的布拉克瘦了下来，头发长了，曾经的布拉克已经不见踪影，变成了一个无情的人。当然，在新冠期间，学校关闭了。发生了变化。然后学校重新开放。开学的第一天，我去了学校。不管发生什么，我总是寻找贝古姆。我总是很激动，但我有一个复仇要报。在第一次休息时，当我和朋友们散步时，我注意到贝古姆和她的朋友们也在散步。但我完全不在意他们。他们就在我们前面走。然后，贝古姆第一次回头看到我时，非常惊讶，并立即回头。然后当然，我们聊了聊，我们又在一起了。一段看似美好但内心却充满苦涩的关系在1-2周后，我突然想分手时结束了。当然，岁月流逝，彼此无所不知。我们各自有过关系和约会，但我们知道我们爱的人是彼此。然后生活再次将我们聚在一起。我们经历了很多困难，但我们在我们所在的地方，在我们的家中。现在，我们有了一段1年10个月的关系，有高峰和低谷。贝古姆，我非常爱你。我非常爱你。幸运的是你在我的生活中。感谢上帝有你，即使我们吵架和伤害彼此。你是我的宝贝，你将永远是这样，我的爱...幸运的是有你..."
};
const translations = {
    en: {
        welcomeMessage: "THIS SITE IS SPECIALLY PREPARED FOR BEGÜM SEYHAN..",
        loveMessage: "I love you darling..",
        aboutTitle: "About",
        aboutText: "My girlfriend and I have known each other for 6 years. We have experienced many breakups and reunions, growing together in this cycle, but we have been together for the last 1.5 years. Our home is where we belong. We are two people deeply in love with each other. Begüm means a lot to me; she is the center of my life, she is my life. I love you so much, my love. Our paths crossed with Begüm in an imam hatip secondary school. The moment I saw her, I truly believed that love exists in this fantasy world. I was deeply in love with Begüm; I was eating myself up with pure love :) But we had a problem: Begüm had a boyfriend. What should I do, you think? A: Tell her your feelings. B: Respect her relationship and step back. Of course, I stepped back, heartbroken, but I went to school every day for Begüm, checked her Instagram every day, and looked at her photo every day. When she found out I loved her, she responded positively. We were sending indirect stories to each other, and those were such beautiful times. You do everything for love. Then Begüm asked if my proposal was still valid, and of course, I said yes, flying with joy. It felt like life had become mine. Then we started talking every day, but it was as if Begüm was forced to be with me. I was always the one texting and asking questions. Until a week later, at 06:00 in the morning, I received a message: 'Burak, I want to break up.' Why did she break up? Did I do something wrong? I had no idea. All I could do was cry my heart out for the girl I loved. Later, I realized she had blocked me everywhere. I immediately created a fake account, sent her a request, and asked her to come back, asking what I did wrong. She only replied, 'It had to be this way,' and blocked me again. That was it. Trying to cope with the first shock of life, time passed. Chubby Burak got slim, hair grew, and the old Burak was gone, replaced by a ruthless person. During the corona period, schools were closed, and there was a transformation. Then schools reopened. On the first day of school, I went there, still looking for Begüm and feeling excited, but I was ready for revenge. During the first recess, while walking around with my friends, I noticed Begüm and her group walking nearby. I didn't pay any attention to them. When Begüm looked back just once and saw me, she was very surprised and looked back again. Then, of course, we started talking and eventually got back together. It seemed nice, but there was still a lingering sadness in me. Our relationship ended 1-2 weeks later when I suddenly wanted to break up. Years passed without us knowing about each other. We both had relationships and flings, but we knew that we were the ones we were truly in love with. Then life brought us back together. We went through so many difficulties, but we are where we belong, at home. Now, we have been together for 1 year and 10 months, going through good and bad times. Begüm, I love you so much. I am deeply in love with you. I am so glad you are in my life. I thank God every day for you. Even if we argue and hurt each other, you are my darling and will always remain so, my love. I am so glad you exist.."
    },
    tr: {
        welcomeMessage: "BU SİTE BEGÜM SEYHAN İÇİN ÖZEL OLARAK HAZIRLANMIŞTIR..",
        loveMessage: "Seni seviyorum sevgilim..",
        aboutTitle: "Hakkında",
        aboutText: "Sevgilimle 6 yıldır tanışıyoruz. Bir çok ayrılık yaşadık tekrar barıştık bu döngüyle büyüdük aslında biz fakat son 1.5 Senedir hep birlikteyiz Ait olduğumuz yer evimizdeyiz. Biz birbirine çok aşık iki insanız Begüm benim için çok şey ifade ediyor o benim hayatımın merkezi o benim hayatım seni çok seviyorum aşkım. Begümle yollarımız bir imamhatip ortaokulunda kesişti onu gördüğüm ilk an gerçekten bu hayal dünyasında aşk diye bir şeyin gerçek olduğu idi, Begüme çok aşık olmuştum kendi kendimi yiyordum saf sevgiydi benimki :) ama bir sorunumuz vardı begümün bir sevgilisi vardı ne yapmalıydım sizce? A: Ona hislerini söyle B: Saygı duy ve geri çekil tabiki bende çok üzülürek geri çekildim ama her gün begüm için okula gidiyor her gün instagramını kontrol ediyor her gün fotoğrafına bakıcak kadar seviyordum begüm onu sevdiğimi bildiğini öğrendiği zaman bana olumlu yaklaşmıştı birbirimize göndermeli storyler atıyorduk birbirimize o kadar güzel zamanlardı ki aşk için herşey yapılıyor. Sonra begüm bana teklifim hala geçerli olup olmadığını sordu bende tabiki havalarda uçuşarak salonun etrafında kaç kez döndüğümü bilmeden tabiki evet dedim çok mutluydum sanki hayat benim olmuştu sonra her gün konuşmaya başladık tabiki begüm benimle zorla sebgili olmuş gibiydi her gün ben yazıyor ben soruyordum. taki 1 hafta sonra sabahın 06:00'da ''Burak ben ayrılmak istiyorum'' yazmasıyla son bulmuştu neden ayrılmıştı? Bişey mi yapmıştım hiç bir fikrim yoktu yapabildiğim tek şey aşık olduğum kızın arkasından hüngür hüngür ağlamaktı sonrasında beni her yerden engellediğini fark etmiştim hemen bi fake hesap açıp begüme istek attım yazdım nolur geri dön ben sana ne yaptım diye ve verdiği tek cevap 'Böyle olması gerekiyordu diyip engellemekti' artık herşey. Hayattan aldığım ilk sarsılmayla alışmaya çalışıyordum sonra zaman geçti kilolu burak zayıfladı saçlar uzadı eski buraktan bir haber artık acımasız birisi vardı tabi corona dönemi okullar kapalıydı değişim oldu. Sonrasında okullar açıldı okulun ilk günü okula gittim ne olursa olsun yinede gözüm begümü arıyordu yinede heyecanlanıyordum ama alıcağım bi intikam vardı. ilk teneffüse çıktığımız zaman arkadaşlarımla dolaşırken begüm ve tayfasınında dolaştığını fark ettim fakat hiç oralı olmadım tam önümüzde yürüyorlardı sonra begümün sadece bir kere arkaya bakmasıyla beni görüp çok şaşırıp tekrar arkaya bakması bir oldu sonrasında tabi konuşmalar falan derken biz yine sevgili olmuştuk. güzel gibi görünen ama içimde bi burukluk kalan ilişkimizin 1-2 hafta sonra bir anda ayrılmak istememle son buldu. Tabi kim kimden habersiz yıllar geçti ikimizinde ilişkileri oldu,takılmaları oldu ama biliyorduk ikimizin aşık olduğu kişiler birbirimizdi sonra hayat bizi tekrardan bir araya getirdi ne zorluklar çektik ama biz olduğumuz yerdeyiz evimizdeyiz. Şuan 1 Yıl 10 aylık iyi kötü giden bir ilişkimiz var. Begüm seni çok seviyorum. Sana çok aşığım iyi ki hayatımdasın, Rabbime ne kadar şükretsem azdır seninle ne kadar küssekte birbirimizi kırsakta sen benim balimsin her zamanda öyle kalıcaksın sevgilim.. İyiki varsin......."
    },
    // Other languages...
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
    changeLanguage(); // Initial translation based on the default value
});


