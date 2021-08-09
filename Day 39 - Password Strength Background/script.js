const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blueValue = 20 - length * 3;
  background.style.filter = `blur(${blueValue}px)`;
});
