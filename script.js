
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
    console.log(p)
    let k = document.createElement("img");
    k.src = kantoPokemon.results[i].url

    //--- comment is incomplete. should return iamge url. 
    // fetch(k)
    //   .then(k => k.json())
    //   .then(picture => {
    //     HTMLstr = "";
    //     document.getElementById("output").innerHTML = HTMLstr;

    //     k.kantoPokemon.foreach
    //     })
    // document.body.appendChild(k);

    //comment below returns a broken img...
    //k.innerHTML = kantoPokemon.results[i].url;
  }

}

const searchForm = document.querySelector("#pokemon-data");
const searchText = document.querySelector("#search");



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let kantoPokemon = searchText.value;
  getKantoPokemon(kantoPokemon);

})

kanto.addEventListener('click', getKantoPokemon);
