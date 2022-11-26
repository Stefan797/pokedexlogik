function closesingleEntry() {
    document.getElementById('background_container').classList.add('z-index-minus');
    document.getElementById('first_header').classList.remove('d-none');
    document.getElementById('header').classList.remove('d-none');
    document.getElementById('entryheader').classList.add('d-none');
    let singleEntryContent = document.getElementById('singleEntry');
    singleEntryContent.classList.add('d-none');
}

function getHtmlforSingleEntry(entrypokemon, entrypokemonSpecies) {
    return /*html*/ `
    <div class="pokemon-container center" style="background-image: url('../img/${entrypokemon['types'][0]['type']['name']}.jpg');">
    <span>${entrypokemonSpecies['names'][5]['name']}</span>
    <img src="${entrypokemon['sprites']['other']['dream_world']['front_default']}">
    </div>
    <div class="info_container">
        <div class="idAndTypCon">
            <p># ${entrypokemon['id']}</p>
            <p>${entrypokemon['types'][0]['type']['name']}</p>
        </div>
       
        <div class="subjects">
            <div onclick="showTheme('About')">About</div>
            <div onclick="showTheme('BaseStats')">Base Stats</div>
            <div onclick="showTheme('Moves')">Moves</div>
            <div onclick="showTheme('Food')">Food</div>
            <div onclick="showTheme('Fun')">Fun</div>
        </div>
        <div id="theme" class="theme">
            <div id="aboutTheme" class="aboutTheme d-none">
            <div>
                <span>Weight : ${entrypokemon['weight']}</span>
                <span>Height : ${entrypokemon['height']}</span>
                ${entrypokemon['abilities'][0]['ability']['name']}
            </div>
            </div>
            <div id="basestatsTheme" class="basestatsTheme">
                ${upperCaseFirstLetter(entrypokemon['stats'][0]['stat']['name'])}
                ${entrypokemon['stats'][0]['base_stat']}
                ${upperCaseFirstLetter(entrypokemon['stats'][1]['stat']['name'])}
                ${entrypokemon['stats'][1]['base_stat']}
                ${upperCaseFirstLetter(entrypokemon['stats'][2]['stat']['name'])}
                ${entrypokemon['stats'][2]['base_stat']}
                ${upperCaseFirstLetter(entrypokemon['stats'][3]['stat']['name'])}
                ${entrypokemon['stats'][3]['base_stat']}
                ${upperCaseFirstLetter(entrypokemon['stats'][4]['stat']['name'])}
                ${entrypokemon['stats'][4]['base_stat']}
                ${upperCaseFirstLetter(entrypokemon['stats'][5]['stat']['name'])}
                ${entrypokemon['stats'][5]['base_stat']}
            </div>
            <div id="movesTheme" class="movesTheme">
                ${entrypokemon['moves'][0]['move']['name']}
            </div>
            <div id="foodTheme" class="foodTheme">

            </div>
            <div id="funTheme" class="funTheme">

            </div>
        </div>
    </div>
    `;
}

function showTheme(topicselection) {
    let selectedtopic = topicselection;
    if (selectedtopic == 'About') {
        document.getElementById('aboutTheme').classList.remove('d-none');
    }
    if (selectedtopic == 'BaseStats') {
        document.getElementById('aboutTheme').classList.remove('d-none');
    }
    if (selectedtopic == 'Moves') {
        document.getElementById('aboutTheme').classList.remove('d-none');
    }
    if (selectedtopic == 'Food') {
        document.getElementById('aboutTheme').classList.remove('d-none');
    }
    if (selectedtopic == 'Fun') {
        document.getElementById('aboutTheme').classList.remove('d-none');
    }
}

