const container = document.getElementById("container");
const color = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARE = 850;

for (i = 0; i < SQUARE; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(square) {
  const color = getRandomColor();
  console.log(color);
  square.style.background = color;
}
function removeColor(square) {
  square.style.background = "#1d1d1d";
}

function getRandomColor() {
  return color[Math.floor(Math.random() * color.length)];
}
