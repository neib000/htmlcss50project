const sounds = ["applause", "tada", "victory", "boo", "wrong"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
