let pokemonDict = {};

let limit = 10;
let offset = 1;

async function init() {
    await loadthefirstpokemonsfromGeneration();
}

async function loadthefirstpokemonsfromGeneration(limit, offset) {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    let response = await fetch(url);
    let responseasJson = await response.json();
    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        const pokemon = await getPokemonByUrl(element.url);

        pokemonDict['id'] = pokemon;
    }
}

async function getPokemonByUrl(url) {
    let response = await fetch(url);
    let responseasJson = await response.json();
    return responseasJson;
}