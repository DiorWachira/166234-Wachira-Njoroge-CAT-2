const video = document.getElementById('wildlifeVideo');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        toggleBtn.textContent = "Pause Video";
    } else {
        video.pause();
        toggleBtn.textContent = "Play Video";
    }
});

video.addEventListener('play', () => {
    toggleBtn.textContent = "Pause Video";
});

video.addEventListener('pause', () => {
    toggleBtn.textContent = "Play Video";
});
