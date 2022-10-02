let pokemonDict = {};

async function init() {
    await loadPokemons(25, 0);
}

async function loadPokemons(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/pokemon?limit=${amountofnewloadedPokemons}&offset=${start}`; // limit= 387 
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        // debugger;
        const pokemon = await getPokemonByUrl(element.url);

        pokemonDict[pokemon['id']] = pokemon;
    }
}

/**
 * Loads the individual Pokemon and saves them to the variable responseasJson.
 * @param {any} url Element of each Pokemon links. 
 * @returns The data as Json
 */
async function getPokemonByUrl(onlypokemonurl) {
    let response = await fetch(onlypokemonurl);
    let responseasJson = await response.json();
    return responseasJson;
}

function renderFirstPokemonGeneration() {
    for (let key in pokemonDict) {
        console.log(key);
        // let pokemon = pokemonDict[index];
        // let container = document.getElementById('container');
        // container.innerHTML += `<div>${pokemon['name']}</div>`;
    }
}

async function renderSecondPokemonGeneration() {
    // P von 151 + 20 !
    await loadPokemons(20, 151);
}

async function renderThirdPokemonGeneration() {
    // P von 251 + 20 !
    await loadPokemons(20, 251);
}

async function loadmorePokemon(start, stop) {
    if (!pokemonDict[1]) {
        let resp = await fetch('Pekomon 1');
        let json = await resp.json();
        pokemonDict[1] = json;
    }
    // pokemonDict updaten
}

// function renderFirstPokemonGeneration() {
//     for (let key in pokemonDict) {
//         console.log(pokemons[key]);
//         // let pokemon = pokemonDict[index];
//         // let container = document.getElementById('container');
//         // container.innerHTML += `<div>${pokemon['name']}</div>`;
//     }
// }