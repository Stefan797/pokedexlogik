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