// let previousSpiecesLength = 0; // initial value
// async function loadPokemonsSpieces(addlength, newForLoopStartValue) {
//     // debugger;
//     if (!pokemonDict[21]) {

//         let newlength = addlength - 1;
//         let start = newForLoopStartValue;

//         for (let s = start; s < newlength; s++) {

//             let pokemonapispeciesurl = `https://pokeapi.co/api/v2/pokemon-species/${s}/`;
//             let response = await fetch(pokemonapispeciesurl);
//             let responseasJson = await response.json();
//             // console.log(responseasJson);
//             const element = responseasJson;
//             // const pokemonSpe = responseasJson[element];
//             pokemonSpeciesDict[element['id']] = element;
//             console.log(element['id']);
//         }

//     } else if (pokemonDict[21]) {
//         // debugger;
//         previousSpiecesLength += 21 + addlength;
//         let newlength = previousSpiecesLength;
//         // lastlength = newlength;
//         let start = newForLoopStartValue + 1;

//         for (let s = start; s < newlength; s++) {

//             let pokemonapispeciesurl = `https://pokeapi.co/api/v2/pokemon-species/${s}/`;
//             let response = await fetch(pokemonapispeciesurl);
//             let responseasJson = await response.json();
//             // console.log(responseasJson);
//             const element = responseasJson;
//             // const pokemonSpe = responseasJson[element];
//             pokemonSpeciesDict[element['id']] = element;
//             console.log(element['id']);
//         }


//     }
// }

// class="typ-${entrypokemon['types'][0]['type']['name']}"

// function headerpokemon() {
//     const headerpokemon = pokemonDict[25];
//     if (headerpokemon) {
//         imagepath = headerpokemon['sprites']['other']['dream_world']['front_default']
//         document.getElementById('headerpokemon').src = imagepath;
//         document.getElementById('headerpokemon').classList.remove('d-none');
//     }
// }

// _______________________________________________________________________

// let SPECIES_CACHE = {};

// async function loadSpecies(pokemon) {
//     let url = pokemon['species']['url'];

//     // 1. Fall - Cached
//     // Returnen aus dem Cache
//     if (SPECIES_CACHE[url]) {
//         return SPECIES_CACHE[url];
//     }
//     // 2. Fall - Nicht im Cache - Laden von Server
//     let resp = await fetch(url);
//     let pespAsJson = await resp.json();
//     let pokemonSpecies = pespAsJson;
//     SPECIES_CACHE[url] = pokemonSpecies;
//     return pokemonSpecies;
// }

/* <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][0]['stat']['name'])}
            ${entrypokemon['stats'][0]['base_stat']}
        </div>
        <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][1]['stat']['name'])}
            ${entrypokemon['stats'][1]['base_stat']}
        </div>
        <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][2]['stat']['name'])}
            ${entrypokemon['stats'][2]['base_stat']}
        </div>
        <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][3]['stat']['name'])}
            ${entrypokemon['stats'][3]['base_stat']}
        </div>
        <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][4]['stat']['name'])}
            ${entrypokemon['stats'][4]['base_stat']}
        </div>
        <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][5]['stat']['name'])}
            ${entrypokemon['stats'][5]['base_stat']}
        </div> */

// this.id = nimmt den Wert aus der ID heraus