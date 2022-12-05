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
        <div id="getID" class="pokemon-id"></div>
            <div class="pokemon-name">
                <span>${pokemonSpecies['names'][5]['name']}</span>
                <div id="filltypes" class="typ-buttons-container">
                    
                </div>
            </div>
        </div>
    </div>
    `;
    generateHtmlPokemonID(pokemon);
    generateHtmlPokemontyps(pokemon);
}

function generateHtmlPokemonID(pokemon) {
    debugger;
    if (pokemon['id'] < 100) {
        document.getElementById('getID').innerHTML = `00${pokemon['id']}`;
    } else (pokemon['id'] >= 100) 
    {
        document.getElementById('getID').innerHTML = `${pokemon['id']}`;
    }
}

function generateHtmlPokemontyps(pokemon) {
    if (pokemon['types'].length >= 1) {
        console.log(pokemon['types'][1]);
    }

    // for (let typnumber = 0; typnumber < pokemon['types'].length; typnumber++) {

    //     let typcontent = document.getElementById('filltypes');
        
    //     if (pokemon['types'].length == 1) {
    //         typcontent.innerHTML = `
    //         <div class="typ-btn typ-btn-${typname} typ-btn-border-${typname}">
    //             <span>${typname}</span>
    //         </div>
    //         `; 
    //     }
    //     if (pokemon['types'][1]) {
    //         return `
    //         <div class="typ-btn typ-btn-${typname} typ-btn-border-${typname}">
    //             <span>${typname}</span>
    //         </div>
    //         `;
    //     }
        
    // }
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

