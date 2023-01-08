function returnThemeBaseStats() {
    return `
    <div id="basestatsTheme" class="basestatsTheme padding-five-percent d-none"></div>
    `;
}

function generateHtmlBaseStats(entrypokemon) {
    let themeBaseStats = document.getElementById('basestatsTheme');
    themeBaseStats.classList.remove('d-none');
    themeBaseStats.innerHTML = '';
    themeBaseStats.innerHTML += `<div class="flex-start-column"></div>`;
    for (let i = 0; i < 6; i++) {
        themeBaseStats.innerHTML += /*html*/ `
        <div class="basestatsbox mb-8">
            <div class="stats-container">
                ${upperCaseFirstLetter(entrypokemon['stats'][i]['stat']['name'])}
            </div>
            <div class="bars-container">
                ${getstatsbars(entrypokemon['stats'][i]['base_stat'], entrypokemon['id'])}
            </div>
        </div>
        `;
    }
}

function getstatsbars(baseStatValue, pokemonID) {
    if (baseStatValue >= 100) {
        baseStatValue = 100;
    }
    let pokemon = pokemonDict[pokemonID];
    let pokemonType = pokemon['types'][0]['type']['name'];
    let baseStatBar = "";
    baseStatBar = `<div id="progress"><div style="width: ${baseStatValue}%;" class="bar entry-color-${pokemonType}"></div></div>`;
    return baseStatBar;
}