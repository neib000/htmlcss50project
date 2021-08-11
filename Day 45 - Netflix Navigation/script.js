const openBTN = document.querySelector(".open-btn");
const closeBTN = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

openBTN.addEventListener("click", () => {
  nav.forEach((navEl) => {
    navEl.classList.add("visible");
  });
});

closeBTN.addEventListener("click", () => {
  nav.forEach((navEl) => {
    navEl.classList.remove("visible");
  });
});
