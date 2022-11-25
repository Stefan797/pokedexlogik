let InformationSentencesGerman = ['Klicken Sie auf das Glumanda, um jedes Mal zum Anfang der Seite zurückzukehren.', 'Informieren Sie sich über die spannenden Details in dem jeweiligen Eintrag.'];
let InformationSentencesEnglish = ['Click on the glumanda to return to the top of the page each time.','Find out about the exciting details in the respective entry.'];
let showHint = 0;

function headerpokemon() {
    const headerpokemon = pokemonDict[4];
    if (headerpokemon) {
        imagepath = headerpokemon['sprites']['other']['dream_world']['front_default']
        document.getElementById('headerpokemon').src = imagepath;
        document.getElementById('headerpokemon').classList.remove('d-none');
    }
}

function comeUpToSide() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

function showdifferentUserInformations() {
    setInterval(() => {
        changeInformationSentence();
    }, 30000);
}

function changeInformationSentence() {
    debugger;
    let info = document.getElementById('info-text');
    const Sentence = InformationSentencesGerman[showHint];
    info.innerHTML = Sentence;    
    showHint++;
}