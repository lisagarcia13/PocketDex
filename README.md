## Project Name :

<h1>Pocketdex</h1>

## Deployed Website :

https://lisagarcia13.github.io/PocketDex/

## Project Description

My project will be to create a Pokedex. Pokemon will be organzied by buttons that have region names. A search bar will be avaliable to have users search by pokemon name.

## API and Data Sample

I will be using http://pokeapi.co/ as my API source. Here is a code snippet :

```{
    "pokemon_entries": [
        {
            "entry_number": 1,
            "pokemon_species": {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
            }
        },
        {
            "entry_number": 2,
            "pokemon_species": {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
            }
        },
        {
            "entry_number": 3,
            "pokemon_species": {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
            }
        },
        {
            "entry_number": 4,
            "pokemon_species": {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
            }
        },
        {
            "entry_number": 5,
            "pokemon_species": {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
            }
        },
        {
            "entry_number": 6,
            "pokemon_species": {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
            }
        },
        {
            "entry_number": 7,
            "pokemon_species": {
                "name": "squirtle",
                "url": "https://pokeapi.co/api/v2/pokemon-species/7/"
            }
        },
        {
            "entry_number": 8,
            "pokemon_species": {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon-species/8/"
            }
        },
        {
            "entry_number": 9,
            "pokemon_species": {
                "name": "blastoise",
                "url": "https://pokeapi.co/api/v2/pokemon-species/9/"
            }
        }
```

## Wireframes

Main Page:
<img src = "assets/Screen Shot 2021-11-07 at 8.00.47 PM.png">

What you'll see if you click on a region:
<img src = "assets/Screen Shot 2021-11-07 at 7.16.47 PM.png">

#### MVP

- Use external API to grab information to build website
- HTML is used to build the basic template
- Basic CSS to add styling
- Javascript for functionality
- Create a search bar to allow user to search for Pokemon
- Have buttons that are organized by Pokemon Regions

#### PostMVP

- Be able to save Pokemon to favorites
- Grab more Pokemon Information (ex. Types, Moves, Abilities, etc.)
- Creating a feature that would allow the user to toggle the skin of the Pokedex to change depending on the generation.
- Adding a random Pokemon generator

## Project Schedule

| Day                | Deliverable                             | Status     |
| ------------------ | --------------------------------------- | ---------- |
| November 8th       | Project Approval/ Getting files set up  | Complete   |
| November 9th       | Working with the API                    | Complete   |
| November 10th      | Putting my code together                | Complete   |
| November 11th      | Setting up functionality/ MVP checklist | Complete   |
| November 12th      | Barebones Website running               | Complete   |
| November 13th/14th | Finishing touches/CSS                   | Complete   |
| November 15th      | Presentations                           | Incomplete |

## Priority Matrix

<img src = "assets/Screen Shot 2021-11-07 at 8.32.22 PM.png">

## Timeframes

| Component            | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| HTML                 |    L     |     2 hrs      |    1.5 hrs    |   1.5hrs    |
| CSS                  |    H     |     4 hrs      |     6 hrs     |    6hrs     |
| Adding/Linking forms |    H     |      2hrs      |     5hrs      |    5hrs     |
| Working with API     |    H     |      6hrs      |     6hrs      |    6hrs     |
| JS                   |    H     |      6hrs      |     7hrs      |    7hrs     |
| Research             |    M     |      3hrs      |     5hrs      |    4hrs     |
| Debugging            |    M     |      3hrs      |     4hrs      |    3hrs     |
| Search Bar           |    H     |      3hrs      |     5hrs      |    5hrs     |
| Total                |    H     |     29hrs      |    37.5hrs    |   37.5hrs   |

## Code Snippet

```
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayPokemon.innerHTML = "";
  const input = searchText.value;
  if (input.length > 0) {
    searchPokemon(input);
  }
})

```

I had the most trouble getting my search bar to work. I ran into a lot of issues with Pokemon either repeating or no Pokemon coming up when searched. I'm most proud of it because it may not be the most complex, but it was my biggest challenge I accomplished.

## Change Log
