
// // https://pokeapi.co/api/v2/pokedex/hoenn/

const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");


const pokeInfo = document.querySelector(".pokemon-info")
const displayPokemon = document.querySelector(".container");

async function getKantoPokemon() {
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    try {
      const res = await axios.get(url);
      let kantoPokemonName = res.data;
      showKantoPokemon(kantoPokemonName);
    } catch (err) {
      alert(err);
    }
  }
}

getKantoPokemon();

function showKantoPokemon(kantoPokemonName) {
  console.log(kantoPokemonName);
  const pokemonDiv = document.createElement("div");
  pokemonDiv.innerHTML = ` 
  <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${kantoPokemonName.id}.png" />
  <h3> ${kantoPokemonName.id}. ${kantoPokemonName.name} </h3>
  `
  displayPokemon.appendChild(pokemonDiv);
}

//divided into separate functions
// called this function in my HTML
function kantoButton() {
  if (displayPokemon.style.display === 'none') {
    displayPokemon.style.display = 'block';
  } else {
    displayPokemon.style.display = 'none';
  }
}
const searchForm = document.querySelector("#pokemon-data");
const searchText = document.querySelector("#search");



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayPokemon.innerHTML = "";
  const searchPokemon = searchText.value
  getKantoPokemon(searchPokemon);

})


// kanto.addEventListener('click', (e) => {
//   e.preventDefault();

//   // displayPokemon.innerHTML = "";
// });

// try for search bar
// function removeKantoPokemon() {
//   const removeElement = document.querySelector(".container");
//   while (removeElement.lastChild) {
//     removeElement.removeChild(removeElement.lastChild);
//   }
// }
// removeKantoPokemon();