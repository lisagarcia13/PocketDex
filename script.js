
// https://pokeapi.co/api/v2/pokedex/hoenn/

const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");

kanto.addEventListener('click', getKantoPokemon);

async function getKantoPokemon() {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokedex/kanto/");
    console.log(res);

  } catch (err) {
    alert(err);
  }
}

getKantoPokemon();