let pokemonDict = {};
let pokemonSpeciesDict = {};
let pokemonTypsDict = {};
let headerpokemonArray = [];
let currentShowedPokedex = 1;
let currentloading = false;
let currentLanguage = 'German';

async function init() {
    await loadPokemons(20, 0);
    await loadPokemonsSpieces(20, 0);
    await loadPokemonsTyps(20, 0);
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

async function loadPokemonsTyps(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/type?limit=${amountofnewloadedPokemons}&offset=${start}`;
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        const pokemon = await getPokemonByUrl(element.url);
        pokemonTypsDict[pokemon['id']] = pokemon;
        console.log(pokemonTypsDict[pokemon['id']]);
        // console.log(pokemonTypsDict['names'][4]['name']);
    }
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
                await loadPokemons(20, 1);
                await loadPokemonsSpieces(20, 1)
            }
            break;
        case 2:
            if (!pokemonDict[152]) {
                await loadPokemons(20, 151);
                await loadPokemonsSpieces(20, 151);
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                await loadPokemons(20, 251);
                await loadPokemonsSpieces(20, 251);
            }

            break;
    }

    renderPokemonGeneration(start, stop, generationNumber);
}