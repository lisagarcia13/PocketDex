
// // https://pokeapi.co/api/v2/pokedex/hoenn/

const kanto = document.querySelector(".kanto");
const johto = document.querySelector(".johto");
const hoenn = document.querySelector(".hoenn");
const sinnoh = document.querySelector(".sinnoh");
const unova = document.querySelector(".unova");
const kalos = document.querySelector(".kalos");
const alola = document.querySelector(".alola");
const galar = document.querySelector(".galar");
// const test = document.querySelector("#test");
// const pokeName = document.querySelector(".kanto-name");

// async function getKantoPokemon() {
//   try {
//     const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
//     let kantoPokemonName = res.data;
//     showKantoPokemon(kantoPokemonName);
//   } catch (err) {
//     alert(err);
//   }
// }

// getKantoPokemon();



// function showKantoPokemon(kantoPokemon) {
//   console.log(kantoPokemon);
//   for (let i = 0; i < 151; i++) {
//     let p = document.createElement("p");
//     pokeName.appendChild(p);
//     p.innerText = kantoPokemon.results[i].name;
//     kantoPictures(kantoPokemon.results[i].url);
//     // kantoAbilities(kantoPokemon.abilties[i]);
//   }

// }
// async function kantoPictures(kantoURL) {
//   try {
//     const res = await axios.get(kantoURL);
//     let images = res.data.sprites;
//     displayKantoPictures(images);
//   } catch (err) {
//     console.log(err);
//   }
// }

// function displayKantoPictures(images) {
//   console.log(images);
//   let k = document.createElement("img");
//   k.src = images.front_default;
//   test.appendChild(k);
// }







// Promise.all(emptyArray).then((results) => {
// const kantoPokemon = results.map((kantoPokemonName) => ({



//   }));
//   console.log(kantoPokemon);
// });

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
  // const kantoPokemon = {
  //   name: kantoPokemonName.name,
  //   id: kantoPokemonName.id,
  //   image: kantoPokemonName.sprites["front_default"],
  //   ability: kantoPokemonName.abilities.map((ability) => ability.ability.name).join(','),
  //   type: kantoPokemonName.types.map((type) => type.type.name).join(',')
  // }
  // console.log(kantoPokemon);
  const pokemonDiv = document.createElement("div");
  pokemonDiv.innerHTML = ` 
  <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${kantoPokemonName.id}.png" />
  <h3> ${kantoPokemonName.id}. ${kantoPokemonName.name} </h3>
  `
  displayPokemon.appendChild(pokemonDiv);
}

const searchForm = document.querySelector("#pokemon-data");
const searchText = document.querySelector("#search");



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayPokemon.innerHTML = "";
  const searchPokemon = searchText.value
  getKantoPokemon(searchPokemon);

})

kanto.addEventListener('click', (e) => {
  e.preventDefault();
  displayPokemon = ""
  getKantoPokemon();
});