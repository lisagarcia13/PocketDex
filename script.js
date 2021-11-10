
// https://pokeapi.co/api/v2/pokedex/hoenn/

const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");
const test = document.querySelector("#test");
const pokeName = document.querySelector(".kanto-name");

async function getKantoPokemon() {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
    let kantoPokemonName = res.data;
    showKantoPokemon(kantoPokemonName);
  } catch (err) {
    alert(err);
  }
}

getKantoPokemon();



function showKantoPokemon(kantoPokemon) {
  console.log(kantoPokemon);
  for (let i = 0; i < 151; i++) {
    let p = document.createElement("p");
    pokeName.appendChild(p);
    p.innerText = kantoPokemon.results[i].name;
    kantoPictures(kantoPokemon.results[i].url);
    // kantoAbilities(kantoPokemon.abilties[i]);
  }

}
async function kantoPictures(kantoURL) {
  try {
    const res = await axios.get(kantoURL);
    let images = res.data.sprites;
    displayKantoPictures(images);
  } catch (err) {
    console.log(err);
  }
}

function displayKantoPictures(images) {
  console.log(images);
  let k = document.createElement("img");
  k.src = images.front_default;
  test.appendChild(k);
}

async function kantoAbilities() {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/2/");
    let abilities = res.data;
    displayKantoAbilities(abilities);
  } catch (err) {
    console.log(err);
  }
}
kantoAbilities();

function displayKantoAbilities(abilities) {
  console.log(abilities);
  let info = document.createElement("p");
  test.appendChild(info);

}

const searchForm = document.querySelector("#pokemon-data");
const searchText = document.querySelector("#search");



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let kantoPokemon = searchText.value;
  // code below is suppose to clear search
  // test.innerHTML = "";
  getKantoPokemon(kantoPokemon);

})

kanto.addEventListener('click', (e) => {
  e.preventDefault();
  test.innerHTML = "";
  pokeName.innerHTML = "";
  getKantoPokemon();
});


