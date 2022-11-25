InformationSentencesGerman = ['Klicken Sie auf das Glumanda, um jedes Mal zum Anfang der Seite zurückzukehren.', 'Informieren Sie sich über die spannenden Details in dem jeweiligen Eintrag.'];
InformationSentencesEnglish = ['Click on the glumanda to return to the top of the page each time.','Find out about the exciting details in the respective entry.'];

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
    }, 3000);
}

function changeInformationSentence() {
    info = document.getElementById('info-text');
    for (let i = 0; i < InformationSentencesGerman.length; i++) {
        const Sentence = InformationSentencesGerman[i];
        info.innerHTML = Sentence;        
    }
}