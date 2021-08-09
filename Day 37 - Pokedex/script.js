const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
console.log(main_types);
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEL = document.createElement("div");
  pokemonEL.classList.add("pokemon");

  const poke_types = pokemon.types.map((type) => type.type.name);
  console.log(poke_types);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  console.log(color);

  pokemonEL.style.backgroundColor = color;

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokemonInnerHTML = `<div class="img-container">
  <img src="a3bc17e6215031332462cc64e59b7922ddd14b91.png" alt="" />
</div>
<div class="info">
  <span class="number">#001</span>
  <h3 class="name">${name}</h3>
  <small class="type">: <span>${type}</span></small>
</div>
  `;
  pokemonEL.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEL);
};
fetchPokemons();
