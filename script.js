
// https://pokeapi.co/api/v2/pokedex/hoenn/

const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");
const test = document.querySelector("#test")



function showKantoPokemon(pokeNames) {
  console.log(pokeNames);
  // pokeNames.forEach((pokeNames) => {
  //   test.innerText = pokeNames.results[pokeNames].name;
  // });
  let listOfPokemon = [];
  for (let i = 0; i < 150; i++) {
    listOfPokemon.push(pokeNames.results[i].name);
  }
  test.innerText = listOfPokemon;

  //test.innerText = pokeNames.results[0].name;

}

async function getKantoPokemon() {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
    let pokemonName = res.data;
    showKantoPokemon(pokemonName);
  } catch (err) {
    alert(err);
  }
}

getKantoPokemon();

const searchForm = document.querySelector("#pokemon-data");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted")
})

kanto.addEventListener('click', getKantoPokemon);