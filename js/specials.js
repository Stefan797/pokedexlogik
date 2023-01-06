let InformationSentencesGerman = ['Klicke auf das Pikachu, um oben zur Seite zu gelangen.', 'Informieren Sie sich über die spannenden Details im jeweiligen Eintrag.', 'Drücke die Tasten L + E um die Pokedex Sprache auf Englisch zu ändern !'];
let InformationSentencesEnglish = ['Click on the Pikachu to return to the top of the page each time.','Find out about the exciting details in the respective entry.', 'Press the L + G keys to change the Pokedex language to German !'];
let showHint = 0;
let interval;

async function headerpokemon() {
    let pikachu = 'https://pokeapi.co/api/v2/pokemon/25/';
    let pikachuResp = await fetch(pikachu);
    let pikachuResponseAsJson = await pikachuResp.json();
    // console.log(pikachuResponseAsJson);
    headerpokemonArray.push(pikachuResponseAsJson);
    let headerpokemon = headerpokemonArray[0];
    let imagepath = headerpokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('headerpokemon').src = imagepath;
    document.getElementById('headerpokemon').classList.remove('d-none');
}

function comeUpToSide() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

function showdifferentUserInformations() {
    interval = setInterval(() => {
        changeInformationSentence();
    }, 10000);
}

function changeInformationSentence() {
    let info = document.getElementById('info-text');
    const Sentence = InformationSentencesGerman[showHint];
    info.innerHTML = Sentence;    
    showHint++;
    if(showHint == 3) {
        clearInterval(interval);
    }
}

function changePokedexLanguage() {
    // debugger;
    if (OpenEntry) {
        opensingleEntry(currentOpenEntryNumber);
    }
    renderPokemonGeneration(1, 151, 1);
    changeEntryMenuLanguage();
}

function changeEntryMenuLanguage() {
    if (currentLanguage == 'English') {
        document.getElementById('entry-about-menu').innerHTML = 'About';
        document.getElementById('entry-base-stats-menu').innerHTML = 'Base Stats';
        document.getElementById('entry-moves-menu').innerHTML = 'Moves';
    }
    if (currentLanguage == 'German') {
        document.getElementById('entry-about-menu').innerHTML = 'Über';
        document.getElementById('entry-base-stats-menu').innerHTML = 'Basis Werte';
        document.getElementById('entry-moves-menu').innerHTML = 'Attacken';
    }
}

function checkDataLoadingAnimation() {
    if (currentloading) {
        document.getElementById('loader').classList.remove('d-none');
    }
    if (!currentloading) {
        document.getElementById('loader').classList.add('d-none');
    }
}

// _______________________________________________________________________

/**
 * Converts the first letter to a capital letter.
 * 
 * @param  {string} string - String to be converted.
 * @returns {string}
 */
function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// utility.js für Funktionen die man öffters in Projekten brauchen kann.