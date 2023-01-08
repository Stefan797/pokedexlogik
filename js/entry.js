function getHtmlforSingleEntry(entrypokemon, entrypokemonSpecies) {
    const id = entrypokemon['id'];
    const typename = entrypokemon['types'][0]['type']['name'];
    let currentPokemonTypeJson = findPokemonType(entrypokemon);
    return `
    <div class="pokemon-container center entry-color-${typename}">
        <span>${selectEntryPokemonNameLanguage(entrypokemon, entrypokemonSpecies)}</span>
        <img src="${entrypokemon['sprites']['other']['dream_world']['front_default']}">
    </div>
    <div class="info_container">
        <div class="idAndTypeCon">
            <p># ${id}</p>
            <button>${selectEntryTypeLanguage(entrypokemon, currentPokemonTypeJson)}</button>
        </div>

        <div class="subjects">
            <div id="entry-about-menu" onclick="showTheme(${id}, 'About')">Über</div>
            <div id="entry-base-stats-menu" onclick="showTheme(${id}, 'BaseStats')">Basis Werte</div>
            <div id="entry-moves-menu" onclick="showTheme(${id}, 'Moves')">Attacken</div>
        </div>
        <div id="theme" class="theme">
            ${returnEntryStartThemeAbout(entrypokemon)}
            ${returnThemeBaseStats()}
            ${returnThemeMoves()}
        </div>
    </div>
    `;
}

function findPokemonType(entrypokemon) {
    let test = pokemonTypesDict;
    for (let x = 1; x <= 18; x++) {
        if (test[x]['name'] == entrypokemon['types'][0]['type']['name']) {
            return pokemonTypesDict[x];
        }
    }
}

function selectEntryPokemonNameLanguage(entrypokemon, entrypokemonSpecies) {
    // debugger;
    let pokemonId = entrypokemon['id'];
    if (currentLanguage == 'German') {
        return `${entrypokemonSpecies['names'][5]['name']}`;
    }
    if (currentLanguage == 'English') {
        return `${upperCaseFirstLetter(pokemonDict[pokemonId]['name'])}`;
    }
}

function selectEntryTypeLanguage(entrypokemon, currentPokemonTypeJson) {
    let pokemonId = entrypokemon['id'];
    // debugger;
    if (currentLanguage == 'German') {
        return `${currentPokemonTypeJson['names'][4]['name']}`;
    }
    if (currentLanguage == 'English') {
        return `${upperCaseFirstLetter(pokemonDict[pokemonId]['types'][0]['type']['name'])}`;
    }
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
}

function clearAll() {
    document.getElementById('aboutTheme').classList.add('d-none');
    document.getElementById('basestatsTheme').classList.add('d-none');
    document.getElementById('movesTheme').classList.add('d-none');
}

function closesingleEntry() {
    document.getElementById('entry-background-container').classList.add('d-none');
    document.getElementById('singleEntry').classList.add('d-none');
    OpenEntry = false;
}

