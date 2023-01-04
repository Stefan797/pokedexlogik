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
    getlearndlevelatHtml(entrypokemon);

    for (let i = 0; i < 30; i++) {

        if (true || entrypokemon['moves'][i]['version_group_details'][0]['move_learn_method']['name'] == 'level-up') {
            let movesbylevelup = document.getElementById('moves');
            movesbylevelup.innerHTML += `
            <div>${upperCaseFirstLetter(entrypokemon['moves'][i]['move']['name'])}</div>
            `;
        }
    }
}

function getlearndlevelatHtml(entrypokemon) {
    // debugger;
    let movesOrdered = entrypokemon['moves'].sort(function (m1, m2) {
        return m1['version_group_details'][0]['level_learned_at'] - m2['version_group_details'][0]['level_learned_at'];
    });
    for (let i = 0; i < movesOrdered.length; i++) {
        if (movesOrdered[i]['version_group_details'][0]['move_learn_method']['name'] == 'level-up') {
            let levelup = document.getElementById('levels');
            levelup.innerHTML += `
            <div>${movesOrdered[i]['version_group_details'][0]['level_learned_at']}</div>
            `;
        }
    }
}

/* <div class="flex-start">

<div class="Movessection1" style="margin-right: 10%;">
    <div id="levels">
        <span style="margin-bottom: 10px;">Level</span>
    </div>
</div>
<div class="Movessection2">
    <div id="moves">
        <span>Move</span>
    </div>
</div>
</div> */