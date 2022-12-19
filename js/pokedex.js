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
        <div class="pokemon-box-img-wrapper">
            <div class="pokemon-box-pokeball">
                <div class="pokeball-line">
                    <div class="pokeball-void-circle">
                        <div class="pokeball-button"></div>
                    </div>
                </div>
            </div>
            <img class="pokemon-box-img" src="${pokemon['sprites']['other']['dream_world']['front_default']}">
        </div>
        <div class="bottom-box">
            
            <div class="designbox">
            <div class="kreis"></div>
            </div>
            <div>
                <div class="pokemon-id">
                    ${generateHtmlPokemonID(pokemon)}
                </div>
                <div class="pokemon-name">
                    <span>${selectPokemonName(pokemon['id'], pokemonSpecies)}</span>
                </div>
            </div>
            <div class="type-buttons-container">
                ${generateHtmlPokemontypes(pokemon)}
            </div>
        </div>
    </div>
    `;
    ;
}

function selectPokemonName(pokemonId, pokemonSpecies) {
    if (currentLanguage == 'German') {
        return `${pokemonSpecies['names'][5]['name']}`;
    }
    if (currentLanguage == 'English') {
        return `${pokemonDict[pokemonId]['name']}`;
    }
}

function generateHtmlPokemontypes(pokemon) {
    let typesHTML = "";
    for (let index = 0; index < pokemon['types'].length; index++) {
        const typeName = pokemon['types'][index]['type']['name'];
        for (let x = 1; x < 18; x++) {
            if (typeName == pokemonTypesDict[x]['name']) {
                typesHTML += `
                <button class="type-btn type-btn-${typeName} type-btn-border-${typeName} type-btn-box-shadow-${typeName}">
                    ${selecttypelanguage(pokemon['id'], index, x)}
                </button>`;
            }
        }
    }

    return typesHTML;
}

function selecttypelanguage(pokemonId, index, x) {

    if (currentLanguage == 'German') {
        return `${pokemonTypesDict[x]['names'][4]['name']}`;
    }
    if (currentLanguage == 'English') {
        return `${pokemonDict[pokemonId]['types'][index]['type']['name']}`;
    }
}



function generateHtmlPokemonID(pokemon) {
    if (pokemon['id'] > 0 && pokemon['id'] < 10) {
        return `00${pokemon['id']}`;
    }
    if (pokemon['id'] >= 10 && pokemon['id'] < 100) {
        return `0${pokemon['id']}`;
    }

    if (pokemon['id'] >= 100) {
        return `${pokemon['id']}`;
    }
}


function opensingleEntry(pokemonID) {
    const entrypokemon = pokemonDict[pokemonID];
    const entrypokemonSpecies = pokemonSpeciesDict[pokemonID];

    document.getElementById('entry-background-container').classList.remove('d-none');
    document.getElementById('singleEntry').classList.remove('d-none');
    let singleEntryContent = document.getElementById('singleEntry');
    singleEntryContent.innerHTML = '';
    singleEntryContent.innerHTML += getHtmlforSingleEntry(entrypokemon, entrypokemonSpecies);
}

