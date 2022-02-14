const sounds = ["applause", "boo", "gasp"];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound.toUpperCase();

    btn.addEventListener('click', () => {
        let song = document.getElementById(sound);
        stopSongs();
        song.play();
    });

    const buttons = document.querySelector('.buttons');
    buttons.appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        let song = document.getElementById(sound);
        song.pause();
        song.setDuration = 0;
    })
}