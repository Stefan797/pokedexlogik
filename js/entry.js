function getHtmlforSingleEntry(entrypokemon, entrypokemonSpecies) { // /*html*/
    return  `
    <div class="pokemon-container center"
        style="background-image: url('../img/${entrypokemon['types'][0]['type']['name']}.jpg');">
        <span>${entrypokemonSpecies['names'][5]['name']}</span>
        <img src="${entrypokemon['sprites']['other']['dream_world']['front_default']}">
    </div>
    <div class="info_container">
        <div class="idAndTypCon">
            <p># ${entrypokemon['id']}</p>
            <button>${entrypokemon['types'][0]['type']['name']}</button>
        </div>

        <div class="subjects">
            <div onclick="showTheme(${entrypokemon['id']}, 'About')">About</div>
            <div onclick="showTheme(${entrypokemon['id']}, 'BaseStats')">Base Stats</div>
            <div onclick="showTheme(${entrypokemon['id']}, 'Moves')">Moves</div>
            <div onclick="showTheme(${entrypokemon['id']}, 'Food')">Food</div>
            <div onclick="showTheme(${entrypokemon['id']}, 'Fun')">Fun</div>
        </div>
        <div id="theme" class="theme">
            <div id="aboutTheme" class="aboutTheme padding-five-percent">
                <div class="flex-start-column">
                    <span class="mb-8">Weight : ${entrypokemon['weight']}</span>
                    <span class="mb-8">Height : ${entrypokemon['height']}</span>
                    <span>Ability : ${entrypokemon['abilities'][0]['ability']['name']}</span>
                </div>
            </div>
            <div id="basestatsTheme" class="basestatsTheme padding-five-percent d-none"></div>
            <div id="movesTheme" class="movesTheme padding-five-percent d-none"></div>
            <div id="foodTheme" class="foodTheme padding-five-percent d-none"></div>
            <div id="funTheme" class="funTheme padding-five-percent d-none"></div>
        </div>
    </div>
    `;
}

function showTheme(pokemonID, selectedtopic) {
    const entrypokemon = pokemonDict[pokemonID];

    if (selectedtopic == 'About') {
        clearAll();
        generateHtmlAbout(entrypokemon);
    }
    if (selectedtopic == 'BaseStats') {
        clearAll();
        generateHtmlBaseStats(entrypokemon);
    }
    if (selectedtopic == 'Moves') {
        clearAll();
        generateHtmlMoves(entrypokemon);
    }
    if (selectedtopic == 'Food') {
        clearAll();
        generateHtmlFood(entrypokemon);
    }
    if (selectedtopic == 'Fun') {
        clearAll();
        generateHtmlFun(entrypokemon);
        
    }
}

function clearAll() {
    document.getElementById('aboutTheme').classList.add('d-none');
    document.getElementById('basestatsTheme').classList.add('d-none');
    document.getElementById('movesTheme').classList.add('d-none');
    document.getElementById('foodTheme').classList.add('d-none');
    document.getElementById('funTheme').classList.add('d-none');
}

function closesingleEntry() {
    document.getElementById('background_container').classList.add('z-index-minus');
    document.getElementById('first_header').classList.remove('d-none');
    document.getElementById('header').classList.remove('d-none');
    document.getElementById('entryheader').classList.add('d-none');
    let singleEntryContent = document.getElementById('singleEntry');
    singleEntryContent.classList.add('d-none');
}

