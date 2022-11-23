async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {
    currentShowedPokedex = pokemonGenerationNumber;
    let container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        const pokemonSpecies = pokemonSpeciesDict[i];
        if (pokemon && pokemonSpecies) {
            // let pokemonSpecies = await loadSpecies(pokemon);
            container.innerHTML += `
            <div class="pokemon-box distances">
            <img src="${pokemon['sprites']['other']['dream_world']['front_default']}">
            <div class="pokemon-name">
            <span>${pokemonSpecies['names'][5]['name']}</span>
            </div>
            </div>`;
        }
    }
}