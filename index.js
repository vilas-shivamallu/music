let isPlaying = false;
let isAllPlaying = false;
let audio = '';
// let i = 0;
let musicPausedAt = -1;
let musicListLength = 9;
let previousTrackId = '';
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

function playPause(audioId) {
    let playButton = document.getElementById("playButton");
    if (previousTrackId && !audioId) {
        audioId = previousTrackId;
        musicPausedAt = songsList.indexOf(audioId);
        console.log(audioId, songsList.indexOf(audioId));
        console.log("prevTrack", isPlaying);
    }
    audio = document.getElementById(audioId);
    if (audio == null ) {
        audio = document.getElementById(songsList[(musicPausedAt == -1 ) ? 0 : musicPausedAt]);
        (musicPausedAt == -1) ? musicPausedAt++ : '';
    }
    if (!isPlaying) {
        console.log("iffsPlaying", isPlaying);
        previousTrackId = audioId ? audioId : songsList[(musicPausedAt == -1 ) ? 0 : musicPausedAt];
        musicPausedAt = songsList.indexOf(previousTrackId);
        isPlaying = true;
        audio.play();
        playButton.innerHTML = '<img src="static/pause-button.png" alt="pause" width="100px">';
    } else {
        console.log("ielsesPlaying", isPlaying);
        isPlaying = false;
        if (previousTrackId != audioId) {
            document.getElementById(previousTrackId).pause();
            playPause(audioId);
            return;
        }
        audio.pause();
        playButton.innerHTML = '<img src="static/play-button.png" alt="play" width="100px">';
    }
}

function playNext(i=0) {
    if (i >= 0 && i < musicListLength) {
        if (i > 0 && isPlaying) {
            let prevAudio = document.getElementById(songsList[i-1]);
            prevAudio.pause();
            isPlaying = false;
        } else if (i == 0 && isPlaying) {
            let prevAudio = document.getElementById(songsList[musicListLength-1]);
            prevAudio.pause();
            isPlaying = false;
        }
        let nextAudioId = songsList[i];
        playPause(nextAudioId);
        musicPausedAt = i;
    } else {
        playNext(0);
    }
}

function playPrev(i) {
    if (i >= 0 && i < musicListLength) {
        console.log(i);
        if (i+1 < musicListLength && isPlaying) {
            let prevAudio = document.getElementById(songsList[i+1]);
            prevAudio.pause();
            isPlaying = false;
        } else if (i+1 >= musicListLength && isPlaying) {
            let prevAudio = document.getElementById(songsList[0]);
            prevAudio.pause();
            isPlaying = false;
        }
        let prevAudioId = songsList[i];
        playPause(prevAudioId);
        musicPausedAt = i++;
    } else {
        playPrev(musicListLength-1);
    }
}

// function playPause() {
//     let playButton = document.getElementById("playButton");
//     if (!isPlaying) {
//         playNext(musicPausedAt);
//         playButton.innerHTML = '<img src="static/pause-button.png" alt="pause" width="100px">';
//     } else {
//         playButton.innerHTML = '<img src="static/play-button.png" alt="play" width="100px">';
//         let prevAudio = document.getElementById(songsList[musicPausedAt-1]);
//         prevAudio.pause();
//         isPlaying = false;
//     }
// }


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

// function durationFun(i) {
//     let audio = document.getElementById(revSongId[i]);
//     if (audio && audio.duration) {
//         return audio.duration*1000;
//     }
//     return 1000;
// }

function durationFun(i) {
    let audio = document.getElementById(revSongId[i]);
    if (audio && audio.duration) {
        // return audio.duration*1000;
    }
    return 3000;
}
