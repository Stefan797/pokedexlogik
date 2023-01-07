function getHtmlforSingleEntry(entrypokemon, entrypokemonSpecies) { // /*html*/
    const id = entrypokemon['id'];
    const typename = entrypokemon['types'][0]['type']['name'];
    // debugger;
    let currentPokemonTypeJson = findPokemonType(entrypokemon);
    return  /*html*/ `
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
            <div id="aboutTheme" class="aboutTheme padding-five-percent">
                <div>
                    <div class="weight-container">
                        <div id="weight">Gewicht : </div><div>${entrypokemon['weight']} kg</div>
                    </div>
                    <div class="height-container">
                    <div id="height">Größe : </div><div>${entrypokemon['height']}0 cm</div>
                    </div>
                    <div id="ability">Fähigkeit : </div>
                    <div class="ability-container mb-8">
                    <div id="ability-name">${generateAbilitiesHTML(entrypokemon)}</div>
                    </div>
                </div>
            </div>
            <div id="basestatsTheme" class="basestatsTheme padding-five-percent d-none"></div>
            <div id="movesTheme" class="movesTheme padding-five-percent d-none"></div>
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

async function generateAbilitiesHTML(entrypokemon) {
    // debugger;
    for (let i = 0; i < entrypokemon['abilities'].length; i++) {
        let currentAbility = await loadAbilityJSON(entrypokemon, i);
        let abilitycontent = document.getElementById('ability-name');
        abilitycontent.innerHTML += `
        ${selectAbilityLanguage(entrypokemon, i, currentAbility)}
        `;
    }
}

function selectAbilityLanguage(entrypokemon, i, currentAbility) {
    if (currentLanguage == 'German') {
        return `
        <div class="mb-8">
            ${ABILITIES_CACHE[currentAbility['id']]['names'][4]['name']}
            <div class="mt-8">${ABILITIES_CACHE[currentAbility['id']]['flavor_text_entries'][12]['flavor_text']}</div>
        </div>`;
    }
    if (currentLanguage == 'English') {
        return `
        <div class="mb-8">
            ${entrypokemon['abilities'][i]['ability']['name']}
            <div class="mt-8">${ABILITIES_CACHE[currentAbility['id']]['flavor_text_entries'][0]['flavor_text']}</div>
        </div>`;
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

