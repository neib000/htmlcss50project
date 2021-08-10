const result = document.getElementById("result");
const filter = document.getElementById("filter");

const listItems = [];
getData()
async function getData() {
  const res = await fetch("http://randomuser.me/api?results=50");

  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    <img
            src="${user.picture.large}"
            alt="${user.name.first}"
          />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>`;
    result.appendChild(li)
  });
}
