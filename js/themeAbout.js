function generateHtmlAbout(entrypokemon) {
    let themeAbout = document.getElementById('aboutTheme');
    themeAbout.classList.remove('d-none');
    themeAbout.innerHTML = '';
    themeAbout.innerHTML += `
    <div>
        <div class="weight-container">
            <div id="weight">Gewicht : </div><div>${entrypokemon['weight']} kg</div>
        </div>
        <div class="height-container">
            <div id="height">Größe : </div><div>${entrypokemon['height']}0 cm</div>
        </div>
        <div class="ability-container">
            <div id="ability">Fähigkeit : </div>
            <div id="ability-name">${generateAbilitiesHTML(entrypokemon)}</div>
        </div>
    </div>
    `;
}