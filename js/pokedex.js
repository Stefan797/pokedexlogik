async function renderPokemonGeneration(start, stop, pokemonGenerationNumber) {
    currentShowedPokedex = pokemonGenerationNumber;
    let container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = start; i < stop; i++) {
        const pokemon = pokemonDict[i];
        const pokemonSpecies = pokemonSpeciesDict[i];
        const pokemonTyps = pokemonTypsDict[i];
        if (pokemon && pokemonSpecies) {
            container.innerHTML += getHtmlforPokedex(pokemon, pokemonSpecies, pokemonTyps);
        }
    }
}

function getHtmlforPokedex(pokemon, pokemonSpecies, pokemonTyps) {
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
                    <span>${pokemonSpecies['names'][5]['name']}</span>
                </div>
            </div>
            <div class="typ-buttons-container">
                ${generateHtmlPokemontyps(pokemon, pokemonTyps)}
            </div>
        </div>
    </div>
    `;
    ;
}

// function generateHtmlPokemontyps(pokemon, pokemonTyps) {
//     console.log(pokemonTyps['names'][4]['name']);
//     let typesHTML = "";
//     if (currentLanguage == 'German') {
//         for (let index = 0; index < pokemon['types'].length; index++) {
//             const typeName = pokemon['types'][index]['type']['name'];
//             const typeNameGerman = pokemonTyps['names'][4]['name'];
            
//             if (typeName == ) {
                
//             }
//             typesHTML += `
//             <button class="typ-btn typ-btn-${typeName} typ-btn-border-${typeName} typ-btn-box-shadow-${typeName}">
//                 ${typeNameGerman}
//             </button>`;
//         }  
//     }
//     return typesHTML;
// }

function generateHtmlPokemontyps(pokemon, pokemonTyps) {
    
    let typesHTML = "";
    
    for (let index = 0; index < pokemon['types'].length; index++) {
        const typeName = pokemon['types'][index]['type']['name'];
        typesHTML += `
        <button class="typ-btn typ-btn-${typeName} typ-btn-border-${typeName} typ-btn-box-shadow-${typeName}">
        ${typeName}
        </button>`;
     }  
    
    return typesHTML;
}

function generateHtmlPokemonID(pokemon) {
    if (pokemon['id'] > 0 && pokemon['id'] < 10) {
        return `00${pokemon['id']}`;
    }
    if (pokemon['id'] >= 10 && pokemon['id'] < 100) {
        return `0${pokemon['id']}`;
    }

    if (pokemon['id'] >= 100) 
    {
        return `${pokemon['id']}`;
    }
}


function opensingleEntry(pokemonID) {
    const entrypokemon = pokemonDict[pokemonID];
    const entrypokemonSpecies = pokemonSpeciesDict[pokemonID];
    document.getElementById('background_container').classList.remove('z-index-minus');
    document.getElementById('first_header').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');
    designEntryheader(pokemonID);
    let singleEntryContent = document.getElementById('singleEntry');
    singleEntryContent.classList.remove('d-none');
    singleEntryContent.innerHTML = '';
    singleEntryContent.innerHTML += getHtmlforSingleEntry(entrypokemon, entrypokemonSpecies);
}

