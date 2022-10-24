let pokemonDict = {};
let currentshowedPokedex = 1;

async function init() {
    await loadPokemons(20, 0);
    renderPokemonGeneration(1, 151, 1);
}

let currentloading = false;
window.onscroll = async function (ev) {
    if (hasReachedPageBottom() && !currentloading) {
        currentloading = true;
        console.log('going');
        checkandinitializeFindPokemon(findNextMissingPokemon(checkfindNextMissingPokemonstartvalue()));
        currentloading = false;
    }
};

function checkfindNextMissingPokemonstartvalue() {
    if (currentshowedPokedex == 1) {
        return 1;
    }
    if (currentshowedPokedex == 2) {
        return 151;
    }
    if (currentshowedPokedex == 3) {
        return 251;
    }
}

async function findNextMissingPokemon(start) {
    console.log(start);
    // debugger;
    for (let i = start; i < 387; i++) {
        if (pokemonDict[i]) {
            continue;
        } else {
            return i;
        }
    }
}

async function checkandinitializeFindPokemon(foundvalue) {
    console.log(await foundvalue);
    getvalue = await foundvalue;
    newstartvalue = getvalue - 1;
    // con(newstartvalue);
    await loadPokemons(20, newstartvalue);
    checkGeneration(getvalue);
}

function checkGeneration(findNextMissingPokemonvalue) {
    // debugger;
    if (findNextMissingPokemonvalue < 151) {
        renderPokemonGeneration(1, 151, 1);
    } 
    if (findNextMissingPokemonvalue > 151 && findNextMissingPokemonvalue < 251) {
        renderPokemonGeneration(152, 252, 2);
    } 
    if (findNextMissingPokemonvalue > 252 && findNextMissingPokemonvalue < 387) {
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

async function checkPokemonGenerationStarts(generationNumber) {
    switch (generationNumber) {
        case 1:
            if (!pokemonDict[2]) {
                await loadPokemons(20, 2);
            }
            break;
        case 2:
            if (!pokemonDict[152]) {
                await loadPokemons(20, 151);
                renderPokemonGeneration(152, 251, 2);
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                await loadPokemons(20, 251);
                renderPokemonGeneration(252, 387, 3);
            }
            break;
        default:
            console.log('default');
    }
}

async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {
    currentshowedPokedex = pokemonGenerationNumber;
    checkPokemonGenerationStarts(currentshowedPokedex);
    let container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        if (pokemon) {
            container.innerHTML += `<div class="pokemoncontainer"><img src="${pokemon['sprites']['other']['dream_world']['front_default']}"><div>${pokemon['name']}</div></div>`;
        }
    }
}