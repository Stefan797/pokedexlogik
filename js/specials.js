let InformationSentencesGerman = ['Klicke auf das Pikachu, um immer wieder oben zur Seite zu gelangen.', 'Informieren Sie sich über die spannenden Details in dem jeweiligen Eintrag.'];
let InformationSentencesEnglish = ['Click on the Pikachu to return to the top of the page each time.','Find out about the exciting details in the respective entry.'];
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
    }, 30000);
}

function changeInformationSentence() {
    // debugger;
    let info = document.getElementById('info-text');
    const Sentence = InformationSentencesGerman[showHint];
    info.innerHTML = Sentence;    
    showHint++;
    if(showHint == 10) {
        clearInterval(interval);
    }
}

function designEntryheader(pokemonID) {
    // debugger;
    const entryheader = pokemonDict[pokemonID];
    let typename = entryheader['types'][0]['type']['name'];
    let entryheadercontent = document.getElementById('entryheader');
    entryheadercontent.classList.remove('d-none');
    entryheadercontent.style.backgroundImage = "url('../img/" + typename + ".jpg')";
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