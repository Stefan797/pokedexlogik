let pokemonDict = {};

async function init() {
    await loadPokemons(20, 0);
    renderPokemonGeneration(1, 151, 1);
}

let currentloading = false;
window.onscroll = async function (ev) {
    if (hasReachedPageBottom() && !currentloading) {
        currentloading = true;
        console.log('going');
        show(findNextMissingPokemon(1));
        currentloading = false;
    }
};

// function getmore(value) {
//     getvalue = value[[PromiseResult]];
//     console.log(getvalue);  
// }

// function show(h) {
//     console.log(h);
// }

// function show21() {
//     return 21;
// }

async function findNextMissingPokemon(start) {
    // debugger;
    for (let i = start; i < 80; i++) {
        if (pokemonDict[i]) {
            continue;
        } else {
            return i;
        }
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

async function checkPokemonGenerationDatas(number) {
    switch (number) {
        case 1:
            if (!pokemonDict[2]) {
                await loadPokemons(20, 2);
            }
            break;
        case 2:
            if (!pokemonDict[152]) {
                await loadPokemons(20, 151);
                renderPokemonGeneration(151, 251, 2);
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                await loadPokemons(20, 251);
                renderPokemonGeneration(251, 387, 3);
            }
            break;
        // Can be extended by several generations.
        default:
            console.log('default');
    }
}

async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {

    checkPokemonGenerationDatas(pokemonGenerationNumber);


    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        if (pokemon) {
            container.innerHTML += `<div class="pokemoncontainer"><img src="${pokemon['sprites']['other']['dream_world']['front_default']}"><div>${pokemon['name']}</div></div>`;
        }
    }
}