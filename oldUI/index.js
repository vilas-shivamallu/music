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
        // audio = document.getElementById(songsList[(musicPausedAt == -1 ) ? 0 : musicPausedAt]);
        // (musicPausedAt == -1) ? musicPausedAt++ : '';
        playNext(musicPausedAt);
    }
    if (!isPlaying) {
        console.log("iffsPlaying", isPlaying);
        previousTrackId = audioId ? audioId : songsList[(musicPausedAt == -1 ) ? 0 : musicPausedAt];
        musicPausedAt = songsList.indexOf(previousTrackId);
        isPlaying = true;
        audio.play();
        playButton.innerHTML = '<img src="../static/icons/pause-button.svg" alt="pause" width="100px" height="100px">';
    } else {
        console.log("ielsesPlaying", isPlaying);
        isPlaying = false;
        if (previousTrackId != audioId) {
            document.getElementById(previousTrackId).pause();
            playPause(audioId);
            return;
        }
        audio.pause();
        clearTimeout(timeVar);
        playButton.innerHTML = '<img src="../static/icons/play-button.svg" alt="play" width="100px" height="100px">';
    }
}

function playNext(i=0) {
    if (i >= 0 && i < musicListLength) {
        if (i > 0 && isPlaying) {
            stopTrack(songsList[i-1]);
        } else if (i == 0 && isPlaying) {
           stopTrack(songsList[musicListLength-1]);
        }
        let nextAudioId = songsList[i];
        playPause(nextAudioId);
        musicPausedAt = i;
        if (isPlayAllEnabled) {
            let currentTrack = document.getElementById(songsList[musicPausedAt]);
            let duration =  (currentTrack.duration - currentTrack.currentTime)*1000;
            timeVar = setTimeout(() => {
                if (isPlayAllEnabled && isPlaying) {
                    playNext(musicPausedAt+1);
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
        console.log(i);
        if (i+1 < musicListLength && isPlaying) {
           stopTrack(songsList[i+1]);
        } else if (i+1 >= musicListLength && isPlaying) {
            stopTrack(songsList[0]);
        }
        let prevAudioId = songsList[i];
        playPause(prevAudioId);
        clearTimeout(timeVar);
        musicPausedAt = i++;
    } else {
        playPrev(musicListLength-1);
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
        playButton.innerHTML = '<img src="../static/icons/repeat.svg" style="background-color: rgb(162 78 24); border-radius: 50px;" alt="play" width="60px" height="60px">';
    } else {
        playButton.innerHTML = '<img src="../static/icons/repeat.svg" alt="play" width="60px" height="60px" styles=>';
    }
}
