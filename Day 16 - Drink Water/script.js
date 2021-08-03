const smallCups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("Liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup()

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});
function highlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    (smallCups[index].nextElementSibling === null || !smallCups[index].nextElementSibling.classList.contains("full"))
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCup = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCup) * 330}px`;
  }
  if (fullCups === totalCup) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
