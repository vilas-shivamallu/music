let isPlaying = false;
let isPlayAllEnabled = false;
let audio = '';
// let i = 0;
let musicPausedAt = -1;
let musicListLength = 9;
let previousTrackId = '';
var timeVar;
var playAllElement = document.createElement('script');
playAllElement.src = './playAll.js';

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

let songsDetails = [
    {
        "id": "mastMaganAudioId",
        "name": "Mast Magan",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/flower.jpg'
    }, {
        "id": "arMedley",
        "name": "A R Rahman Medley",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/forest.jpg'
    }, {
        "id": "Jeena_Jeena",
        "name": "Jeena Jeena",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/image.jpg'
    }, {
        "id": "Janam_Janam_320_123Musiq",
        "name": "Janam Janam",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/content.jpg'
    }, {
        "id": "ar",
        "name": "AR",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/waterfallsDark.jpg'
    }, {
        "id": "Meesaya",
        "name": "Meesaya - Murukku",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/img_lights_wide.jpg'
    }, {
        "id": "Samjhawan",
        "name": "Samjhawan",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/bodyback.jpg'
    }, {
        "id": "wafaNeBewafai",
        "name": "Wafa Ne Bewafai",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/2.jpg'
    }, {
        "id": "rabta",
        "name": "Rabta Agent vinod",
        "year": "1998",
        "singer": "",
        "imageUrl": '../static/vilas.jpg'
    }, {
        "id": "",
        "name": "",
        "year": "",
        "singer": "",
        "imageUrl": ''
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
        playButton.innerHTML = '<img src="../static/icons/pause-button.svg" alt="pause" width="40px" height="40px">';
    } else {
        isPlaying = false;
        if (previousTrackId != audioId) {
            document.getElementById(previousTrackId).pause();
            playPause(audioId);
            return;
        }
        audio.pause();
        clearTimeout(timeVar);
        playButton.innerHTML = '<img src="../static/icons/play-button.svg" alt="play" width="40px" height="40px">';
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
                console.log('currentTrackINTIMEOUTJGDGJHGHJGJHGJHG', songsList[musicPausedAt], 'duration', duration, 'currentTrack', currentTrack.duration, 'currentTime', currentTrack.currentTime);
                if (isPlayAllEnabled && isPlaying) {
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
        playButton.innerHTML = '<img src="../static/icons/repeat.svg" style="background-color: rgb(162 78 24); border-radius: 50px;" alt="play" width="24px" height="24px">';
    } else {
        playButton.innerHTML = '<img src="../static/icons/repeat.svg" alt="play" width="24px" height="24px" styles=>';
    }
}

function appendPlayCard() {
    let playCard = document.getElementById("playCard");
    let playCardSongName = document.getElementById("playCardSongName");
    playCardSongName.innerHTML = songsDetails[musicPausedAt].name;
    playCard.style.backgroundImage = "url(" + songsDetails[musicPausedAt].imageUrl + ")";
    playCard.style.color = "aliceblue";
    playCard.style.backgroundSize= 'cover';
    playCard.style.width = "250px";
    playCard.style.height = "300px";
}
// function playAll() {
//     let playButton = document.getElementById("playButton");
//     isAllPlaying = !isAllPlaying;
//     if (isAllPlaying) {
//         playButton.innerHTML = '<img src="static/pause-button.png" alt="pause" width="100px">';
//         document.getElementsByTagName("head")[0].appendChild(playAllElement);
//     } else {
//         playButton.innerHTML = '<img src="static/play-button.png" alt="play" width="100px">';
//         document.getElementsByTagName("head")[0].removeChild(playAllElement);
//         i = musicPausedAt;
//     }
// }

