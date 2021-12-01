
const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");

const pokeInfo = document.querySelector(".pokemon-info");
const displayPokemon = document.querySelector(".container");



//Gets Kanto Pokemon data from range. START and END are arguments.
async function getPokemonFromRange(start, end) {
  searchText.value = "";
  for (let i = start; i <= end; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    try {
      const res = await axios.get(url);
      showPokemon(res.data)
    } catch (err) {
      alert(err);
    }
  }
}

//Displays Pokemon with response data.id
function showPokemon(pokemon) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.innerHTML = `<img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" width = "250px"/>
  <h3> ${pokemon.id}. ${pokemon.name} </h3>`;
  displayPokemon.appendChild(pokemonDiv);
}

//Searches for a Pokemon in all Pokemon
async function searchPokemon(findme) {
  const url = `https://pokeapi.co/api/v2/pokedex/national/`; //using national dex for pokemon lookup
  try {
    const res = await axios.get(url);
    let pokeball = res.data.pokemon_entries.filter(function (obj) { return searchObj(obj, findme) }); //returns either object of a pokemon OR an empty array pokemon not found.
    if (pokeball.length !== 0) { //If object: "found" is larger than 0, then pokemon was found.
      console.log("Search Successful.");
      let pokemonID = pokeball[0].entry_number; //object uses national pokedex to return object with ID and name. 
      getPokemonFromRange(pokemonID, pokemonID); //uses function to lookup pokemon by ID. 
    } else {
      console.log("Search Failed. Try Again.");
    }
  } catch (err) {
    alert(err);
  }
}


function searchObj(obj, findme) {
  for (let key in obj) {
    let value = obj[key]; //set value EQUAL to a key value of itself.
    if (typeof value === 'object') { //if value is type object, then recusrively call searchObj to go deeper into object values.
      return searchObj(value, findme); //call searchObj
    }

    //HERE: at this point, the value is now equal to 1 of 3 things: 
    //Pokemon Name, 
    //Pokemon ID, 
    //Pokemon Sprite URL

    //We now check if the value is equal to the "findme" value. 
    if (typeof value === 'string' && value.toLowerCase().indexOf(findme.toLowerCase()) > -1) {
      return obj;
    }
  }
}

function Gen1Button() {
  getPokemonFromRange(1, 151);
  displayPokemon.style.display = 'flex';
}
function Gen2Button() {
  getPokemonFromRange(152, 251);
  displayPokemon.style.display = 'flex';
}
function Gen3Button() {
  getPokemonFromRange(252, 386);
  displayPokemon.style.display = 'flex';
}
function Gen4Button() {
  getPokemonFromRange(387, 493);
  displayPokemon.style.display = 'flex';
}
function Gen5Button() {
  getPokemonFromRange(494, 649);
  displayPokemon.style.display = 'flex';
}
function Gen6Button() {
  getPokemonFromRange(650, 721);
  displayPokemon.style.display = 'flex';
}
function Gen7Button() {
  getPokemonFromRange(722, 809);
  displayPokemon.style.display = 'flex';
}
function Gen8Button() {
  getPokemonFromRange(810, 898);
  displayPokemon.style.display = 'flex';
}

const searchForm = document.querySelector("#pokemon-data");
const searchText = document.querySelector("#search");



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayPokemon.innerHTML = "";
  const input = searchText.value;
  if (input.length > 0) {
    searchPokemon(input);
  }
})
