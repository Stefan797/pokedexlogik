function openmenu(ID) {
    document.getElementById('header-menu').classList.remove('d-none');
    console.log(ID);
}

function changePokedexLanguageSmartphoneMenu() {
    // debugger;
    if (currentLanguage == 'German') {
        currentLanguage = 'English';
        changePokedexLanguage();
    } else if (currentLanguage == 'English') {
        currentLanguage = 'German';
        changePokedexLanguage();
    }
}

function closemenu() {
    document.getElementById('header-menu').classList.add('d-none');
}