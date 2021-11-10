
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
    document.body.appendChild(p);
    p.innerText = kantoPokemon.results[i].name;
    kantoPictures(kantoPokemon.results[i].url);
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

kantoPictures();

function displayKantoPictures(images) {
  console.log(images);
  let k = document.createElement("img");
  k.src = images.front_default;
  test.appendChild(k);
}

const searchForm = document.querySelector("#pokemon-data");
const searchText = document.querySelector("#search");



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let kantoPokemon = searchText.value;
  getKantoPokemon(kantoPokemon);

})

kanto.addEventListener('click', getKantoPokemon);


