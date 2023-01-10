function changelanguagetoEnglish() {
    compareCurrentLanguage();
    changePokedexLanguage();
}

function changelanguagetoGerman() {
    compareCurrentLanguage();
    changePokedexLanguage();
}

function compareCurrentLanguage() {
    if (currentLanguage == 'German') {
        currentLanguage = 'English';
    } else if (currentLanguage == 'English') {
        currentLanguage = 'German';
    }
}