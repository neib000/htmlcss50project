const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b212b55de22e2e4e2397b12ea794032b&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=b212b55de22e2e4e2397b12ea794032b&query="';
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovie(data.results);
}
function showMovie(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const MovieEL = document.createElement("div");
    MovieEL.classList.add("movie");

    MovieEL.innerHTML = `
    <div class="movie-content">
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>
          ${overview}
          </p>
        </div>
        </div>
        `;
    main.appendChild(MovieEL);
  });
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
