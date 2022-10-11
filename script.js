let pokemonDict = {};

async function init() {
    await loadPokemons(25, 0);
    renderPokemonGeneration(1, 151);
}

async function loadPokemons(amountofnewloadedPokemons, start) {
    let pokemonapiurl = `https://pokeapi.co/api/v2/pokemon?limit=${amountofnewloadedPokemons}&offset=${start}`;
    let response = await fetch(pokemonapiurl);
    let responseasJson = await response.json();

    for (let index = 0; index < responseasJson.results.length; index++) {
        const element = responseasJson.results[index];
        // debugger;
        const pokemon = await getPokemonByUrl(element.url);

        pokemonDict[pokemon['id']] = pokemon;
    }
}

async function getPokemonByUrl(onlypokemonurl) {
    let response = await fetch(onlypokemonurl);
    let responseasJson = await response.json();
    return responseasJson;
}

async function renderPokemonGeneration(start, stop, pokemonGenerationNummber) {
    debugger;
    switch (pokemonGenerationNummber) {
        case "1":
            await loadPokemons(20, 151);
            break;
        case "2":
            console.log(pokemonGenerationNummber);
            break;
        case "3":
            console.log(pokemonGenerationNummber);
            break;
        default:
    }

    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        if (pokemon) {
            container.innerHTML += `<div class="pokemoncontainer"><img src="${pokemon['sprites']['other']['dream_world']['front_default']}"><div>${pokemon['name']}</div></div>`;
        }
    }
}