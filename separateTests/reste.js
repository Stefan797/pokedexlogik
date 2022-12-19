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


// <div class="designbox">
//             <div class="designbox-dupplikat">
//             <div class="border-left-box"></div>
//             <div class="border-right-box"></div>
//             <div class="border-bottom-box"></div>
//             </div>

/* 
.designbox:before {
    content: "";
    position: absolute;
    left    : 10%;
    bottom  : 0;
    height  : 1px;
    width   : 80%;  /* or 100px */
    /* border-bottom: 1px solid white; */

/* .kreis {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
} */ 

/* .designbox-dupplikat {
    position: relative;
    width: 100%;
    height: 100%;
}

.border-bottom-box {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    border-bottom: 1px solid white;
}

.border-left-box {
    transform: rotate(-12deg);
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 10%;
    height: 10%;
    border-left: 1px solid white;
} */

// document.getElementById('background_container').classList.remove('z-index-minus');
// document.getElementById('header').classList.add('d-none');
// designEntryheader(pokemonID);


// function designEntryheader(pokemonID) {
//     // debugger;
//     const entryheader = pokemonDict[pokemonID];
//     let typename = entryheader['types'][0]['type']['name'];
//     let entryheadercontent = document.getElementById('entryheader');
//     entryheadercontent.classList.remove('d-none');
//     entryheadercontent.style.backgroundImage = "url('../img/" + typename + ".jpg')";
// }

/* <div class="pokemon-container center"
        style="background-image: url('../img/${typname}.jpg');">
        <span>${entrypokemonSpecies['names'][5]['name']}</span>
        <img src="${entrypokemon['sprites']['other']['dream_world']['front_default']}">
    </div> */

/* <div id="foodTheme" class="foodTheme padding-five-percent d-none"></div>
<div id="funTheme" class="funTheme padding-five-percent d-none"></div> */

// if (selectedtopic == 'Food') {
//     clearAll();
//     generateHtmlFood(entrypokemon);
// }
// if (selectedtopic == 'Fun') {
//     clearAll();
//     generateHtmlFun(entrypokemon);
    
// }

// document.getElementById('foodTheme').classList.add('d-none');
// document.getElementById('funTheme').classList.add('d-none');

/* <div onclick="showTheme(${id}, 'Food')">Food</div>
<div onclick="showTheme(${id}}, 'Fun')">Fun</div> */