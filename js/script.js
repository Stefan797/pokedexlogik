let pokemonDict = {};
let pokemonImgDict = [];
let pokemonSpiecesDict = {};
let currentShowedPokedex = 1;
let currentloading = false;
let SPECIES_CACHE = {};

async function init() {
    await loadPokemons(20, 0);
    // await loadPokemonsSpieces(20, 0);
    renderPokemonGeneration(1, 151, 1);
    headerpokemon();
}

// async function loadPokemonsSpieces() {
//     let pokemonapispeciesurl = `https://pokeapi.co/api/v2/pokemon?limit=${amountofnewloadedPokemons}&offset=${start}`;
//     let response = await fetch(pokemonapispeciesurl);
//     let responseasJson = await response.json();
//     console.log(responseasJson);
// }

async function loadPokemons(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/pokemon?limit=${amountofnewloadedPokemons}&offset=${start}`;
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        const pokemon = await getPokemonByUrl(element.url);
        pokemonDict[pokemon['id']] = pokemon;
        console.log(pokemon['id']);
    }
}

async function getPokemonByUrl(onlypokemonurl) {
    let response = await fetch(onlypokemonurl);
    let responseasJson = await response.json();
    return responseasJson;
}

async function loadPokemonGeneration(start, stop, generationNumber) {
    switch (generationNumber) {
        case 1:
            if (!pokemonDict[152]) {
                await loadPokemons(20, 1);
            }
            break;
        case 2:
            if (!pokemonDict[152]) {
                await loadPokemons(20, 151);
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                await loadPokemons(20, 251);
            }

            break;
    }

    renderPokemonGeneration(start, stop, generationNumber);
}

async function loadSpecies(pokemon) {
    let url = pokemon['species']['url'];

    // 1. Fall - Cached
    // Returnen aus dem Cache
    if (SPECIES_CACHE[url]) {
        return SPECIES_CACHE[url];
    }
    // 2. Fall - Nicht im Cache - Laden von Server
    let resp = await fetch(url);
    let pespAsJson = await resp.json();
    let pokemonSpecies = pespAsJson;
    SPECIES_CACHE[url] = pokemonSpecies;
    return pokemonSpecies;
}