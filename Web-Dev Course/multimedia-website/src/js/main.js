// main.js

document.addEventListener('DOMContentLoaded', () => {
    const audioLinks = document.querySelectorAll('.audio-link');
    const videoLinks = document.querySelectorAll('.video-link');

    audioLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const audioSrc = link.getAttribute('data-audio-src');
            playAudio(audioSrc);
        });
    });

    videoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const videoSrc = link.getAttribute('data-video-src');
            playVideo(videoSrc);
        });
    });
});

function playAudio(src) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = src;
    audioPlayer.play();
}

function playVideo(src) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = src;
    videoPlayer.play();
}