// let revSongId = [
//     "rabta",
//     "wafaNeBewafai",
//     "Samjhawan",
//     "Meesaya",
//     "ar",
//     "Janam_Janam_320_123Musiq",
//     "Jeena_Jeena",
//     "arMedley",
//     "mastMaganAudioId"
// ];


/*
Playing All songs on load
*/

// (function playSongs(i) {
//     setTimeout(function () {
//         if (--i != -1 && isAllPlaying) {
//             console.log(musicListLength);
//             let audio = document.getElementById(revSongId[i]);
//             audio.play();
//             isPlaying = !isPlaying;
//             playSongs(i);
//             musicPausedAt = i;
//         }
//     }, durationFun(i))
// })(musicListLength);

// function playAll() {
//     let playButton = document.getElementById("playButton");
//     isAllPlaying = !isAllPlaying;
//     if (isAllPlaying) {
//         playButton.innerHTML = '<img src="../static/pause-button.png" alt="pause" width="100px">';
//         document.getElementsByTagName("head")[0].appendChild(playAllElement);
//     } else {
//         playButton.innerHTML = '<img src="../static/play-button.png" alt="play" width="100px">';
//         document.getElementsByTagName("head")[0].removeChild(playAllElement);
//         i = musicPausedAt;
//     }
// }
