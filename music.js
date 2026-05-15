let musicStarted = false;

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  if (!music) return;

  music.volume = 0.5;

  const playMusic = () => {
    if (!musicStarted) {
      music.play().then(() => {
        musicStarted = true;
      }).catch(() => {});
    }
  };

  // try auto start
  playMusic();

  // backup start on first click
  document.addEventListener("click", playMusic);
});