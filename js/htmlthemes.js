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
        <div class="mb-8">
            ${upperCaseFirstLetter(entrypokemon['stats'][i]['stat']['name'])}
            ${entrypokemon['stats'][i]['base_stat']}
        </div>
        `;
    }
}

function generateHtmlMoves(entrypokemon) {
    let themeMoves = document.getElementById('movesTheme');
    themeMoves.classList.remove('d-none');
    themeMoves.innerHTML = '';
    themeMoves.innerHTML += `
        <div class="flex-start">
        <div style="margin-right: 10%;" id="levels">
            <span style="margin-bottom: 10px;">Level</span>
        </div>
        <div id="moves">
            <span>Move</span>
        </div>
        </div>
    `;
    getlearndlevelatHtml(entrypokemon);
    
    for (let i = 0; i < 30; i++) {
        if (entrypokemon['moves'][i]['version_group_details'][0]['move_learn_method']['name'] == 'level-up') {
            let movesbylevelup = document.getElementById('moves');
            movesbylevelup.innerHTML += `
            <div>${upperCaseFirstLetter(entrypokemon['moves'][i]['move']['name'])}</div>
            `;
        }
    }
}

function getlearndlevelatHtml(entrypokemon) {
    debugger;
    let movesOrdered = entrypokemon['moves'].sort( function(m1, m2) {
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

function generateHtmlFood(entrypokemon) {
    let themeFood = document.getElementById('foodTheme');
    themeFood.classList.remove('d-none');
    themeFood.innerHTML = '';
    themeFood.innerHTML += `
    ${entrypokemon['moves'][1]['move']['name']}
    `;
}

function generateHtmlFun(entrypokemon) {
    let themeFun = document.getElementById('funTheme');
    themeFun.classList.remove('d-none');
    themeFun.innerHTML = '';
    themeFun.innerHTML += `
    ${entrypokemon['moves'][2]['move']['name']}
    `;
}