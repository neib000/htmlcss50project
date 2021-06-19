const openx = document.getElementById("open");
const closex = document.getElementById("close");
const container = document.querySelector(".container");

openx.addEventListener("click", () => container.classList.add("show-nav"));
closex.addEventListener("click", () => container.classList.remove("show-nav"));
