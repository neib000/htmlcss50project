const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const texts = ["Tôi là lập trình viên Front-end", "Biên đẹp trai"];
let idx = 1;
let idxText = 0;
// let speed = 300 / speedEl.value;
let speed = 150

writeText();

function writeText() {
  textEl.innerText = texts[idxText].slice(0, idx);

  idx++;
  if (idx > texts[idxText].length) {
    idx = 1;
    idxText++;
  }
  if (idxText >= texts.length) {
    idxText = 0;
  }
  setTimeout(writeText, speed);
}
// speedEl.addEventListener("click", () => {
//   speed = 300 / speedEl.value;
// });
