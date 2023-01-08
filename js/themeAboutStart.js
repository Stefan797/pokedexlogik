function returnEntryStartThemeAbout(entrypokemon) {
    return `
    <div id="aboutTheme" class="aboutTheme padding-five-percent">
        <div>
            <div class="weight-container">
                <div id="weight">Gewicht : </div>
                <div>${entrypokemon['weight']} kg</div>
            </div>
            <div class="height-container">
                <div id="height">Größe : </div>
                <div>${entrypokemon['height']}0 cm</div>
            </div>
            <div id="ability">Fähigkeit : </div>
            <div class="ability-container mb-8">
                <div id="ability-name">${generateAbilitiesHTML(entrypokemon)}</div>
            </div>
        </div>
    </div>
    `;
}

async function generateAbilitiesHTML(entrypokemon) {
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