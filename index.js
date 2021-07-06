let isPlaying = false;
let isPlayAllEnabled = false;
let audio = '';
// let i = 0;
let musicPausedAt = -1;
let musicListLength = 9;
let previousTrackId = '';
var timeVar;

let songsList = [
    "mastMaganAudioId",
    "arMedley",
    "Jeena_Jeena",
    "Janam_Janam_320_123Musiq",
    "ar",
    "Meesaya",
    "Samjhawan",
    "wafaNeBewafai",
    "rabta"
];
// let json = JSON.parse(data.json);
let songsDetails = [
    {
        "id": "mastMaganAudioId",
        "name": "Mast Magan",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/flower.jpg",
        "lyrics": "Ishq ki dhuni roz jalaaye<br>        Uthta dhuaan toh kaise chhupaaye<br>        Ho akhiyaan kare jee hajoori<br>        Maange hai teri manjoori<br>        Kajra siyaahi din rang jaaye<br>        Teri kastoori rain jagaaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        Man mast magan man mast magan<br>        Tera naam dohraaye<br>        <br>        <br>        Chaahe bhi toh bhool na paaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        Man mast magan man mast magan<br>        Tera naam dohraaye<br>        <br>        <br>        Jogiya jog lagake<br>        Makhra rog lagaa ke<br>        Ishq ki dhuni roz jalaaye<br>        Uthta dhuaan toh kaise chhupaaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        <br>        <br>        Chaahe bhi toh bhool na paaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        Man mast magan man mast magan<br>        Tera naam bas tera naam dohraaye<br>        <br>        <br>        Odh ke dhaani reet ki chaadar<br>        Aaya tere shehar mein ranjha tera<br>        Duniya zamaana jhoota fasaana<br>        Jeene marne ka waada saancha mera<br>        Ho sheesh-mehal na mujhko suhaaye<br>        <br>        <br>        Tujh sang sookhi roti bhaaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        <br>        <br>        Chaahe bhi toh bhool na paaye<br>        Man mast magan man mast magan<br>        Bas tera naam dohraaye<br>        Man mast magan man mast magan<br>        Tera naam dohraye.<br>"
    }, {
        "id": "arMedley",
        "name": "A R Rahman Medley",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/forest.jpg",
        "lyrics": "&#119133; &#119134; &#119135; &#119136; &#119137; &#119138; &#119139; &#119140; &#9837; &#9838; &#9839; &#119040; &#119041; &#119042; &#119043; &#119044; &#119045; &#119046; &#119047; &#119048; <br> &#119070; &#119071; &#119072; &#119073; &#119074; &#119075; &#119076; &#119077; &#119078; &#119081; &#119082; &#119083; &#119084; &#119085; &#119086; &#119087; &#119088; &#119089; &#119090; &#119091; &#119092; <br> &#119249; &#119250,&#119251; &#119252; &#119253; &#119254; &#119255,&#119256&#119257&#119258; &#119259,&#119260; &#119261; <br>"
    }, {
        "id": "Jeena_Jeena",
        "name": "Jeena Jeena",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/image.jpg",
        "lyrics": "        Dehleez pe mere dil ki<br>        Jo rakhe hain tune kadam<br>        Tere naam pe meri zindagi<br>        Likh di mere humdum<br>        <br>        Haan seekha maine jeena jeena kaise jeena<br>        Haan seekha maine jeena mere humdum<br>        Na seekha kabhi jeena jeena kaise jeena<br>        Na seekha jeena tere bina humdum<br>        <br>        Dehleez pe merey dil ki<br>        Jo rakhe hain tune kadam<br>        Tere naam pe meri zindagi<br>        Likh di mere humdum<br>        <br>        Haan sikha maine jeena jeena kaise jeena<br>        Haan sikha maine jeena, mere humdum<br>        Na sikha kabhi jeena jeena kaise jeena<br>        Na sikha jeena tere bina humdum<br>        <br>        Sacchi si hain yeh taareefein<br>        Dil se jo maine kari hain...<br>        <br>        Sacchi si hain yeh taareefein<br>        Dil se jo maine kari hain...<br>        <br>        Jo tu mila to saji hain<br>        Duniya meri humdum<br>        O aasma mila zameen ko meri<br>        Aadhe aadhe poore hain hum<br>        Tere naam pe meri zindagi<br>        Likh di mere humdum<br>        <br>        Haan seekha maine jeena jeena, kaise jeena<br>        Haan seekha maine jeena, mere humdum<br>        Na seekha kabhi jeena jeena kaise jeena<br>        Na seekha jeena tere bina humdum<br>"
    }, {
        "id": "Janam_Janam_320_123Musiq",
        "name": "Janam Janam",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/content.jpg",
        "lyrics": "Janam janam janam sath chalna yunhi<br>        Qasam tumhe qasam aake milna yahin<br>        Ek jaan hai bhale do badan hon juda<br>        Meri hoke humesha hi rehna<br>        Kabhi na kehna alvida<br>        <br>        Meri subha ho tumhi<br>        Aur tumhi shaam ho<br>        Tum dard ho tum hi aaram ho<br>        Meri duaaon se aati hai bas yeh sadaa<br>        Meri hoke humesha hi rehna<br>        Kabhi na kehna alvida<br>        <br>        Meri hoke humesha hi rehna<br>        Kabhi na kehna alvida..<br>        <br>        Teri baahon mein hain mere dono jahan<br>        Tu rahe jidhar meri jannat wahin<br>        Jal rahi agan hai jo yeh do tarfa<br>        Na bujhe kabhi meri mannat yahi<br>        Tu meri aarzoo main teri aashiqui<br>        Tu meri shayari main teri mausiqui<br>        <br>        Talab Talab Talab bas teri hai mujhe<br>        Nason mein tu nasha banke ghulna yunhi<br>        Meri mohabbat ka karna tu haq ye ada<br>        Meri hoke humesha hi rehna<br>        Kabhi na kehna alvida<br>        <br>        Meri subha ho tumhi<br>        Aur tumhi shaam ho<br>        Tum dard ho tum hi aaram ho<br>        Meri duaaon se aati hai bas yeh sadaa<br>        Meri hoke humesha hi rehna<br>        Kabhi na kehna alvida<br>"
    }, {
        "id": "ar",
        "name": "AR",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/waterfallsDark.jpg",
        "lyrics": "&#119133; &#119134; &#119135; &#119136; &#119137; &#119138; &#119139; &#119140; &#9837; &#9838; &#9839; &#119040; &#119041; &#119042; &#119043; &#119044; &#119045; &#119046; &#119047; &#119048; <br> &#119070; &#119071; &#119072; &#119073; &#119074; &#119075; &#119076; &#119077; &#119078; &#119081; &#119082; &#119083; &#119084; &#119085; &#119086; &#119087; &#119088; &#119089; &#119090; &#119091; &#119092; <br> &#119249; &#119250,&#119251; &#119252; &#119253; &#119254; &#119255,&#119256&#119257&#119258; &#119259,&#119260; &#119261; <br>"
    }, {
        "id": "Meesaya",
        "name": "Meesaya - Murukku",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/img_lights_wide.jpg",
        "lyrics": "Adiye Sakkarakatti<br>        Nenjukkulla Sticker ra Otti<br>        Ennathaan Enga Kootti<br>        Poriyo Nee<br>        <br>        Adiye Aahaan<br>        Adiye Venaam<br>        <br>        Adiye Sakkarakatti<br>        Nenjukkulla Sticker ra Otti<br>        Ennathaan Enga Kootti<br>        Poriyo Nee<br>        <br>        Neethaan En Vellakatti<br>        Vaadi En Chellakutti<br>        Unnathaan Unnathaan<br>        Theduren Naan<br>        <br>        Naanum Thedi Paarthen<br>        Ulagam Thaandi Paarthen<br>        Unna Pol Azhigiyathaan<br>        Paarththathilladi<br>        <br>        Kavithai Paadi Paarthen<br>        Kathakkali Aadi Paarthen<br>        Adiye Enna Konjam<br>        Paarththu Selladi<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Nee Enna Konjatha Vaadi Pulla<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Kadhal Konjama Thaadi Pulla<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Nee Enna Konjatha Vaadi Pulla<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Kadhal Konjama Thaadi Pulla<br>        <br>        Naan Sirikka Nee Morachu<br>        Enna Paarkkum Pothu<br>        Penne En Manasukkul<br>        Eppadi Irukkum<br>        <br>        Puyalonju Mazha Penju<br>        Veyil Adikkum Pothu<br>        Veesidume Kaaththu<br>        Adi Athupol Irukkum<br>        <br>        Thonavilla Thonavilla<br>        Enna Paththi Enakke Thaan<br>        Thonavilla<br>        Kaanavilla Kaanavilla<br>        En Manasu Enkitta Illa illa<br>        <br>        Naanum Thedi Paarthen<br>        Ulagam Thaandi Paarthen<br>        Unna Pol Azhigiyathaan<br>        Paarththathilladi<br>        <br>        Kavithai Paadi Paarthen<br>        Kathakkali Aadi Paarthen<br>        Adiye Enna Konjam<br>        Paarththu Selladi<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Nee Enna Konjatha Vaadi Pulla<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Kadhal Konjama Thaadi Pulla<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Nee Enna Konjatha Vaadi Pulla<br>        <br>        Vaa En Anjala<br>        Naan Unna Kenjuren<br>        Kadhal Konjama Thaadi Pulla<br>"
    }, {
        "id": "Samjhawan",
        "name": "Samjhawan",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/bodyback.jpg",
        "lyrics": "Main tenu samjhawan ki<br>        Na tere bina lagda jee<br>        <br>        Main tenu samjhawan ki<br>        Na tere bina lagda jee<br>        <br>        Tu ki jaane pyaar mera<br>        Main karoon intezar tera<br>        Tu dil, tunhion jaan meri<br>        <br>        Main tenu samjhawan ki<br>        Na tere bina lagda jee<br>        Tu ki jaane pyaar mera<br>        Main karoon intezar tera<br>        Tu dil, tunhion jaan meri<br>        <br>        Main tenu samjhawan ki<br>        Na tere bina lagda jee<br>        <br>        Mere dil ne chun laiya ne<br>        Tere dil diyan rahaan<br>        Tu jo mere naal tu rehnta<br>        Turpe meriyaan saaha<br>        Jeena mera haye<br>        Hun hai tera, ki main karaan<br>        Tu kar eitbaar mera<br>        Main karoon intezar tera<br>        Tu dil, tunhion jaan meri!<br>        <br>        Main tenu samjhawan ki<br>        Na tere bina lagda jee<br>        <br>        Ve changa nahion keeta beeba,<br>        Ve changa nahion keeta beeba<br>        Dil mera tod ke<br>        Ve bada pachtaiyaan akhaan,<br>        Ve bada pachtaiyaan akhaan<br>        Naal tere jod ke<br>        <br>        Tenu chadd ke kitthe jawaan tu mera parchanwa<br>        Tere mukhde vich hi main taan<br>        Rabb nu apni pawaan<br>        Meri duya haye, sajda tera, karti sada<br>        Tu sun ekraar mera<br>        Main karoon intezar tera<br>        Tu dil, tunhion jaan meri<br>        <br>        Main tenu samjhawan ki<br>        Na tere bina lagda jee<br>        <br>"
    }, {
        "id": "wafaNeBewafai",
        "name": "Wafa Ne Bewafai",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/2.jpg",
        "lyrics": "Ik daur woh tha, mujhse bhi zyada<br>        Unko fikar thi meri..<br>        Kehte thhe mujhse, ruksat na honge<br>        Milke dubara kabhi..<br>        <br>        Ab toh gairon se<br>        Mera haal pucha jaata hai<br>        Yahi dard-e-dil<br>        Mere dil ko rulata hai<br>        <br>        Wafa ne bewafai, bewafai<br>        Bewafai ki hai<br>        <br>        Wafa ne bewafai, bewafai<br>        Bewafai ki hai<br>        <br>        Wafa ne bewafai, bewafai<br>        Bewafai ki hai<br>        <br>        Wafa ne bewafa..<br>        <br>        Baby when I look into your eyes<br>        Baby I'm in paradise<br>        We could take you to the skies<br>        We could make you and I (x2)<br>        <br>        Meri aashiqui ye, rabb ke hawale<br>        Ruthe yaar ko bas, koi mana le<br>        Yaadon ki sooli dil mein<br>        Gadd jaati hai<br>        Veeraniyan jab hadh se<br>        Badh jaati hai<br>        <br>        Ik daur woh tha, mujhse bhi zyaada<br>        Unko fikar thi meri..<br>        Kehte thhe mujhse, ruksat na honge<br>        Milke dubara kabhi..<br>        <br>        Ab toh gairon se<br>        Mera haal pucha jaata hai<br>        Yahi dard-e-dil<br>        Mere dil ko rulata hai<br>        <br>        Wafa ne bewafai, bewafai<br>        Bewafai ki hai (x3)<br>        <br>        Wafa ne bewafai..<br>        <br>        Kuch baatein aisi hoti hai<br>        Jinko bayaan karna<br>        Lafzon mein, namumkin hota hai<br>        Jab wafa mein, wafa hoti hai<br>        Koi na koi wajah hoti hai<br>        Koi na koi wajah hoti hai<br>        <br>        Kyu faaslon mein, nazdeekiyan hain<br>        Kyu zindagi mein, tabdeeliyan<br>        Kyu tanha dil yeh mera mujhse kahein<br>        Yeh silsila bas yoonhi chalta rahein<br>        <br>        Jaane kya huaa hai jiski waja se<br>        Manzilein juda si lag rahi<br>        Anjaani raah pe dil yeh kyun<br>        Khud ko paata hai<br>        Yahi dard-e-dil mere dil ko rulaata hai<br>        <br>        Wafa ne bewafai, bewafai<br>        Bewafai ki hai<br>"
    }, {
        "id": "rabta",
        "name": "Rabta Agent vinod",
        "year": "1998",
        "singer": "",
        "imageUrl": "./static/vilas.jpg",
        "lyrics": "Kehte hain:<br>        Khuda ne iss jahaan mein<br>        Sabhi ke liye kisi na kisi ko hai banaaya<br>        har kisi ke liye<br>        Tera milna hai uss rab ka ishaara<br>        Maano mujhko banaya tere jaise hi kisi ke liye<br>        <br>        Kuch toh hai tujh se raabta<br>        Kuch toh hai tujh se raabta<br>        Kaise hum jaane, hume kya pata<br>        Kuch toh hai tujh se raabta<br>        Tu humsafar hai<br>        Phir kya fikar hai<br>        Jeene ki wajah hi yehi hai<br>        Marna issi ke liye<br>        <br>        Kehte hain:<br>        Khuda ne iss jahaan mein<br>        Sabhi ke liye kisi na kisi ko hai banaaya<br>        har kisi ke liye…<br>        <br>        hmm Meharbaani jaate-jaate mujhpe kar gaya<br>        Guzarta saa lamha ek daaman bhar gaya<br>        Tera nazaara mila, roshan sitaara mila<br>        Taqdeer ki kashtiyon ko kinara mila<br>        <br>        Sadiyon se tarse hai jaisi zindagi ke liye<br>        Teri sohbat mein duaayein hain ussi ke liye<br>        Tera milna hai uss rab ka ishaara<br>        Maano mujhko banaya tere hi jaise kisi ke liye<br>        <br>        Kuch toh hai tujh se raabta<br>        Kuch toh hai tujh se raabta<br>        Kaise hum jaane hume kya pata<br>        Kuch toh hai tujhse raabta<br>        <br>        Tu humsafar hai, phir kya fiqar hai<br>        Jeene ki wajah hi yehi hai<br>        Marna issi ke liye<br>        <br>        Kehte hain:<br>        Khuda ne iss jahaan mein<br>        Sabhi ke liye kisi na kisi ko hai banaaya<br>        Har kisi ke liye…<br>        <br>"
    }, {
        "id": "",
        "name": "",
        "year": "",
        "singer": "",
        "imageUrl": "",
        "lyrics": ""
    }
    ]

function playPause(audioId) {
    let playButton = document.getElementById("playButton");
    if (previousTrackId && !audioId) {
        audioId = previousTrackId;
        musicPausedAt = songsList.indexOf(audioId);
    }
    audio = document.getElementById(audioId);
    if (audio == null) {
        playNext(musicPausedAt);
    }
    if (!isPlaying) {
        previousTrackId = audioId ? audioId : songsList[(musicPausedAt == -1) ? 0 : musicPausedAt];
        musicPausedAt = songsList.indexOf(previousTrackId);
        isPlaying = true;
        audio.play();
        appendPlayCard();
        playButton.innerHTML = '<img src="./static/icons/pause-button.svg" alt="pause" width="40px" height="40px">';
    } else {
        isPlaying = false;
        if (previousTrackId != audioId) {
            document.getElementById(previousTrackId).pause();
            playPause(audioId);
            return;
        }
        audio.pause();
        clearTimeout(timeVar);
        playButton.innerHTML = '<img src="./static/icons/play-button.svg" alt="play" width="40px" height="40px">';
    }
}

function playNext(i = 0) {
    if (i >= 0 && i < musicListLength) {
        if (i > 0 && isPlaying) {
            stopTrack(songsList[i - 1]);
        } else if (i == 0 && isPlaying) {
            stopTrack(songsList[musicListLength - 1]);
        }
        let nextAudioId = songsList[i];
        playPause(nextAudioId);
        musicPausedAt = i;
        if (isPlayAllEnabled) {
            let currentTrack = document.getElementById(songsList[musicPausedAt]);
            let duration = (currentTrack.duration - currentTrack.currentTime) * 1000;
            console.log('currentTrack', songsList[musicPausedAt], 'duration', duration, 'currentTrack.duration', currentTrack.duration, 'currentTime', currentTrack.currentTime);
            timeVar = setTimeout(() => {
                if (isPlayAllEnabled && isPlaying) {
                    console.log('currentTrackINTIMEOUTJGDGJHGHJGJHGJHG', songsList[musicPausedAt], 'duration', duration, 'currentTrack', currentTrack.duration, 'currentTime', currentTrack.currentTime);
                    playNext(musicPausedAt + 1);
                }
            }, duration);
        }
    } else {
        playNext(0);
    }
}

function stopTrack(id) {
    let prevAudio = document.getElementById(id);
    prevAudio.currentTime = 0;
    prevAudio.pause();
    clearTimeout(timeVar);
    isPlaying = false;
}

function playPrev(i) {
    if (i >= 0 && i < musicListLength) {
        if (i + 1 < musicListLength && isPlaying) {
            stopTrack(songsList[i + 1]);
        } else if (i + 1 >= musicListLength && isPlaying) {
            stopTrack(songsList[0]);
        }
        let prevAudioId = songsList[i];
        playPause(prevAudioId);
        clearTimeout(timeVar);
        if (isPlayAllEnabled && isPlaying) {
            playNext(musicPausedAt);
        }
        musicPausedAt = i++;
    } else {
        playPrev(musicListLength - 1);
    }
}

function replay() {
    if (isPlaying) {
        stopTrack(songsList[musicPausedAt]);
    }
    playPrev(musicPausedAt);
}

function playAll() {
    let playButton = document.getElementById("playAll");
    isPlayAllEnabled = !isPlayAllEnabled;
    if (isPlayAllEnabled) {
        if (isPlaying) {
            playNext(musicPausedAt);
        }
        playButton.innerHTML = '<img src="./static/icons/repeat.svg" style="background-color: rgb(162 78 24); border-radius: 50px;" alt="play" width="24px" height="24px">';
    } else {
        playButton.innerHTML = '<img src="./static/icons/repeat.svg" alt="play" width="24px" height="24px" styles=>';
    }
}

function appendPlayCard() {
    let playCard = document.getElementById("playCard");
    let playCardSongName = document.getElementById("playCardSongName");
    let lyrics = document.getElementById("lyrics");
    let playerSection = document.getElementById("playerSection");
    playCardSongName.innerHTML = songsDetails[musicPausedAt].name;
    playCard.style.backgroundImage = "url(" + songsDetails[musicPausedAt].imageUrl + ")";
    playCard.style.color = "aliceblue";
    playCard.style.backgroundSize = 'cover';
    playCard.style.width = "250px";
    playCard.style.height = "300px";
    lyrics.innerHTML = songsDetails[musicPausedAt].lyrics;
}

