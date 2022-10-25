let pokemonDict = {};
let currentShowedPokedex = 1;
let currentloading = false;

async function init() {
    await loadPokemons(20, 0);
    renderPokemonGeneration(1, 151, 1);
}

window.onscroll = async function (ev) {
    if (hasReachedPageBottom() && !currentloading) {
        currentloading = true;
        let nextPokemonId = await findNextMissingPokemon(checkfindNextMissingPokemonStartValue());
        if (nextPokemonId != null) {
            initializeNextFoundPokemons(nextPokemonId);
        }
        currentloading = false;
    }
};

function checkfindNextMissingPokemonStartValue() {
    if (currentShowedPokedex == 1) {
        return 1;
    }
    if (currentShowedPokedex == 2) {
        return 151;
    }
    if (currentShowedPokedex == 3) {
        return 251;
    }
}

async function findNextMissingPokemon(start) {
    if (start <= 387) {
        for (let i = start; i < 387; i++) {
            if (pokemonDict[i]) {
                continue;
            } else {
                return i;
            }
        }
    } else {
        return null;
    }
}

/**
 * 
 * @param {number} nextPokemonId - ID of next Pokemon 
 */
async function initializeNextFoundPokemons(nextPokemonId) {
    let newStartValue = nextPokemonId - 1;
    await loadPokemons(20, newStartValue);
    renderCurrentGeneration(nextPokemonId);
}

function renderCurrentGeneration() {
    if (currentShowedPokedex == 1) {
        renderPokemonGeneration(1, 151, 1);
    }
    if (currentShowedPokedex == 2) {
        renderPokemonGeneration(152, 251, 2);
    }
    if (currentShowedPokedex == 3) {
        renderPokemonGeneration(252, 387, 3);
    }
}

function hasReachedPageBottom() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
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

async function getPokemonByUrl(onlypokemonurl) {
    let response = await fetch(onlypokemonurl);
    let responseasJson = await response.json();
    return responseasJson;
}

async function loadPokemonGeneration(start, stop, generationNumber) {
    switch (generationNumber) {
        case 1:

            await loadPokemons(20, 1);

            break;
        case 2:

            await loadPokemons(20, 151);

            break;
        case 3:

            await loadPokemons(20, 251);

            break;
    }

    renderPokemonGeneration(start, stop, generationNumber);
}

async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {
    currentShowedPokedex = pokemonGenerationNumber;
    let container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        if (pokemon) {
            container.innerHTML += `<div class="pokemoncontainer"><img src="${pokemon['sprites']['other']['dream_world']['front_default']}"><div>${pokemon['name']}</div></div>`;
        }
    }
}