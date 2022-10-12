let pokemonDict = {};
let currentloading = false;

async function init() {
    await loadPokemons(20, 0);
    renderPokemonGeneration(1, 151);
}

window.onscroll = async function (ev) {
    debugger;
    let percent = (document.body.scrollHeight / window.scrollY) * 100;
    console.log(percent);
    if ((percent >= 90) && !currentloading) {
        
        console.log(percent);
        currentloading = true;
        console.log('going');
        currentloading = false;
        lastYScroll = ev.scrollY;
    } else if(ev.scrollY <= lastYScroll){
        console.log("SCROLLING UP");
    }
};

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

async function checkpokemonGenerationDatas(number) {
    switch (number) {
        case 1:
            if (!pokemonDict[2]) {
                await loadPokemons(20, 2);
            }

            break;
        case 2:
            console.log(pokemonDict);
            if (!pokemonDict[152]) {
                await loadPokemons(20, 151);
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                await loadPokemons(20, 251);
            }
            break;
            // Can be extended by several generations.
        default:
            console.log('default');
    }
}

async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {

    checkpokemonGenerationDatas(pokemonGenerationNumber);
    

    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        if (pokemon) {
            container.innerHTML += `<div class="pokemoncontainer"><img src="${pokemon['sprites']['other']['dream_world']['front_default']}"><div>${pokemon['name']}</div></div>`;
        }
    }
}