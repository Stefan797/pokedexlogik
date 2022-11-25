async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {
    currentShowedPokedex = pokemonGenerationNumber;
    let container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        const pokemonSpecies = pokemonSpeciesDict[i];
        if (pokemon && pokemonSpecies) {
            container.innerHTML += getHtmlforPokedex(pokemon, pokemonSpecies);
        }
    }
}

function getHtmlforPokedex(pokemon, pokemonSpecies) {
    return `
    <div id="${pokemon['id']}" onclick="opensingleEntry(this.id)" class="pokemon-box cursor-pointer distances">
    <img src="${pokemon['sprites']['other']['dream_world']['front_default']}">
    <div class="pokemon-name">
    <span>${pokemonSpecies['names'][5]['name']}</span>
    </div>
    </div>`;
}

function opensingleEntry(pokemonID) {
    console.log(pokemonID);
    debugger;
    document.getElementById('background_container').classList.remove('z-index-minus');
    document.getElementById('first_header').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');
    let singleEntryContent = document.getElementById('singleEntry');
    singleEntryContent.classList.remove('d-none');
    singleEntryContent.innerHTML += getHtmlforSingleEntry();
}