function returnThemeMoves() {
    return `
    <div id="movesTheme" class="movesTheme padding-five-percent d-none"></div>
    `;
}

function generateHtmlMoves(entrypokemon) {
    let themeMoves = document.getElementById('movesTheme');
    themeMoves.classList.remove('d-none');
    themeMoves.innerHTML = '';
    themeMoves.innerHTML += /*html*/ `
        <div class="maincontainer">
            <div class="headlines">
                <div style="width: 30%;">Level</div>
                <div style="width: 70%;">Attacken</div>
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
            <div class="mb_2px">${movesOrdered[i]['version_group_details'][0]['level_learned_at']}</div>
            `;
        }
    }
}

async function getLearndLevelAtMovesHtml(entrypokemon) {
    let movesOrdered = ascendingNumbers(entrypokemon);
    // debugger;
    for (let i = 0; i < movesOrdered.length; i++) {
        if (movesOrdered[i]['version_group_details'][0]['move_learn_method']['name'] == 'level-up') { // machine level-up
            let currentMove = await loadAttackJSON(entrypokemon, i);
            let movesbylevelup = document.getElementById('moves');
            movesbylevelup.innerHTML += `
            <div class="mb_2px">${selectAttackLanguage(entrypokemon, i, currentMove)}</div>
            `;
        }
    }
}

function selectAttackLanguage(entrypokemon, i, currentMove) {
    if (currentLanguage == 'German') {
        return `${ATTACK_CACHE[currentMove['id']]['names'][4]['name']}`;
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