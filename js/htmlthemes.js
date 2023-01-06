function generateHtmlAbout(entrypokemon) {
    let themeAbout = document.getElementById('aboutTheme');
    themeAbout.classList.remove('d-none');
    themeAbout.innerHTML = '';
    themeAbout.innerHTML += `
    <div class="flex-start-column">
    <span class="mb-8">Weight : ${entrypokemon['weight']}</span>
    <span class="mb-8">Height : ${entrypokemon['height']}</span>
    <span>Ability : ${entrypokemon['abilities'][0]['ability']['name']}</span>
    </div>`;
}

function generateHtmlBaseStats(entrypokemon) {
    let themeBaseStats = document.getElementById('basestatsTheme');
    themeBaseStats.classList.remove('d-none');
    themeBaseStats.innerHTML = '';
    themeBaseStats.innerHTML += `<div class="flex-start-column"></div>`;
    for (let i = 0; i < 6; i++) {
        themeBaseStats.innerHTML += `
        <div class="basestatsbox mb-8">
            <div class="section1">

            ${upperCaseFirstLetter(entrypokemon['stats'][i]['stat']['name'])}
           
            </div>
            <div class="section2">
            ${getstatsbars(entrypokemon['stats'][i]['base_stat'], entrypokemon['id'])}
            </div>
        </div>
        
        `;
    }
}

// ${entrypokemon['stats'][i]['base_stat']}

function getstatsbars(baseStatValue, pokemonID) {
    let pokemon = pokemonDict[pokemonID];
    let pokemonType = pokemon['types'][0]['type']['name'];
    let baseStatBar = "";
    baseStatBar = `<div id="progress"><div style="width: ${baseStatValue}%;" class="bar bar-color-${pokemonType}"></div></div>`;
    return baseStatBar;
}

function generateHtmlMoves(entrypokemon) {
    let themeMoves = document.getElementById('movesTheme');
    themeMoves.classList.remove('d-none');
    themeMoves.innerHTML = '';
    themeMoves.innerHTML += /*html*/ `
        <div class="maincontainer">
            <div class="headlines">
                <div style="width: 30%;">Level</div>
                <div style="width: 70%;">Moves</div>
            </div>
            <div class="headlinecontent">
                <div style="width: 30%; max-height: 100%;" id="levels"></div>
                <div style="width: 70%; max-height: 100%;" id="moves"></div>
            </div>
        </div>
    `;
    getLearndLevelAtNumbersHtml(entrypokemon);
    getLearndLevelAtMovesHtml(entrypokemon);
}

function getLearndLevelAtNumbersHtml(entrypokemon) {
    let movesOrdered = ascendingNumbers(entrypokemon);
    for (let i = 0; i < movesOrdered.length; i++) {
        if (movesOrdered[i]['version_group_details'][0]['move_learn_method']['name'] == 'level-up') {
            let levelup = document.getElementById('levels');
            levelup.innerHTML += `
            <div>${movesOrdered[i]['version_group_details'][0]['level_learned_at']}</div>
            `;
        }
    }
}

async function getLearndLevelAtMovesHtml(entrypokemon) {
    let movesOrdered = ascendingNumbers(entrypokemon);
    // debugger;
    for (let i = 0; i < movesOrdered.length; i++) {
        if (movesOrdered[i]['version_group_details'][0]['move_learn_method']['name'] == 'level-up') { // machine level-up
            await loadAttackJSON(entrypokemon, i);
            let movesbylevelup = document.getElementById('moves');
            movesbylevelup.innerHTML += `
            <div>${selectAttackLanguage(entrypokemon, i)}</div>
            `;
        }
    }
}

function selectAttackLanguage(entrypokemon, i) {
    if (currentLanguage == 'German') {
        return `${ATTACK_CACHE['names'][4]['name']}`;
    }
    if (currentLanguage == 'English') {
        return `${entrypokemon['moves'][i]['move']['name']}`;
    }
}

// sortiert die stellen vom Feld ['moves'] von klein nach Groß
function ascendingNumbers(entrypokemon) {
    let movesOrdered = entrypokemon['moves'].sort(function (m1, m2) {
        return m1['version_group_details'][0]['level_learned_at'] - m2['version_group_details'][0]['level_learned_at'];
    });
    return movesOrdered;
}