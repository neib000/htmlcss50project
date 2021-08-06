const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No user profile with username");
    }
  }
}
async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos");

    addRepoToCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("Problem with Repos");
    }
  }
}

function createUserCard(user) {
  cardHTML = `
  <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt=""
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name ? user.name : user.login}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Follower</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repo</strong></li>
          </ul>
          <div id="repos">
         
          </div>
        </div>
      </div>
  `;
  main.innerHTML = cardHTML;
}
function createErrorCard(msg) {
  cardHTML = `
  <div class="card">
       <h1>${msg}</h1>
      </div>
  `;
  main.innerHTML = cardHTML;
}
function addRepoToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
