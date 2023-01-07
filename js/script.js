let pokemonDict = {};
let pokemonSpeciesDict = {};
let pokemonTypesDict = {};
let ATTACK_CACHE = {}; // CACHE for Entry Moves
let ABILITIES_CACHE = {}; // CACHE for Entry Abilities
let headerpokemonArray = [];
let currentShowedPokedex = 1;
let currentloading = false;
let currentLanguage = 'German';
let OpenEntry = false;
let currentOpenEntryNumber = 1;

// loadPokemonsSpieces  bei load Function Zwei falsch

async function init() {
    await loadPokemons(10, 0);
    await loadPokemonsSpieces(10, 0);
    // debugger;
    await loadPokemonsTypes(18, 0);
    renderPokemonGeneration(1, 151, 1);
    headerpokemon();
    // debugger;
    showdifferentUserInformations();
}

async function loadPokemons(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/pokemon?limit=${amountofnewloadedPokemons}&offset=${start}`;
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        const pokemon = await getPokemonByUrl(element.url);
        pokemonDict[pokemon['id']] = pokemon;
    }
}

async function loadPokemonsSpieces(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/pokemon-species?limit=${amountofnewloadedPokemons}&offset=${start}`;
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        const pokemon = await getPokemonByUrl(element.url);
        pokemonSpeciesDict[pokemon['id']] = pokemon;
        // console.log(pokemon['id']); Nicht löschen Anzahl der PKM
    }
}

async function loadPokemonsTypes(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/type?limit=${amountofnewloadedPokemons}&offset=${start}`;
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        const pokemon = await getPokemonByUrl(element.url);
        pokemonTypesDict[pokemon['id']] = pokemon;
        // console.log(pokemonTypesDict[pokemon['id']]);
    }
}


async function loadAttackJSON(entrypokemon, i) {
    // debugger;
    let url = entrypokemon['moves'][i]['move']['url'];
    // Z 1 entfernt den letzten backslash, Z 2 gibt die letzen zwei Stellen nach dem letzen Backslash an.
    let rest = url.substring(0, url.lastIndexOf("/"));
    let last = rest.substring(rest.lastIndexOf("/") + 1, rest.length);
    // 1. Fall - Cached
    // Returnen aus dem Cache
    if (ATTACK_CACHE[last]) {
        return ATTACK_CACHE[last];
    }
    // 2. Fall - Nicht im Cache - Laden von Server
    let resp = await fetch(url);
    let respAsJson = await resp.json();
    ATTACK_CACHE[respAsJson['id']] = respAsJson;
    return ATTACK_CACHE[respAsJson['id']];
}

async function loadAbilityJSON(entrypokemon, i) {
    // debugger;
    let url = entrypokemon['abilities'][i]['ability']['url'];
    // Z 1 entfernt den letzten backslash, Z 2 gibt die letzen zwei Stellen nach dem letzen Backslash an.
    let rest = url.substring(0, url.lastIndexOf("/"));
    let last = rest.substring(rest.lastIndexOf("/") + 1, rest.length);
    console.log(last);
    // 1. Fall - Cached
    // Returnen aus dem Cache
    if (ABILITIES_CACHE[last]) {
        return ABILITIES_CACHE[last];
    }
    // 2. Fall - Nicht im Cache - Laden von Server
    let resp = await fetch(url);
    let respAsJson = await resp.json();
    ABILITIES_CACHE[respAsJson['id']] = respAsJson;
    // console.log(ABILITIES_CACHE);
    return ABILITIES_CACHE[respAsJson['id']];
}

async function getPokemonByUrl(onlypokemonurl) {
    let response = await fetch(onlypokemonurl);
    let responseasJson = await response.json();
    return responseasJson;
}

async function loadPokemonGeneration(start, stop, generationNumber) {
    window.scrollTo(0, 0);
    switch (generationNumber) {
        case 1:
            if (!pokemonDict[152]) {
                currentloading = true;
                checkDataLoadingAnimation();
                await loadPokemons(20, 1);
                await loadPokemonsSpieces(20, 1);
                currentloading = false;
                checkDataLoadingAnimation();
            }
            break;
        case 2:
            if (!pokemonDict[152]) {
                currentloading = true;
                checkDataLoadingAnimation();
                await loadPokemons(20, 151);
                await loadPokemonsSpieces(20, 151);
                currentloading = false;
                checkDataLoadingAnimation();
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                currentloading = true;
                checkDataLoadingAnimation();
                await loadPokemons(20, 251);
                await loadPokemonsSpieces(20, 251);
                currentloading = false;
                checkDataLoadingAnimation();
            }

            break;
    }

    renderPokemonGeneration(start, stop, generationNumber);
}