// RIGHT = false;
// LEFT = false;

let keyRegister = {};

window.addEventListener("keydown", (keyboard) => {

    keyRegister[keyboard.key] = true;

    // if (entryOpened) {
    //     if (e.keyCode == 39) {
    //         shownextpokemonup(currentOpenedPokemonId);
    //     }
    //     if (e.keyCode == 37) {
    //         shownextpokemondown(currentOpenedPokemonId);
    //     }
    // }

});


/**
 * The window.addEventlistener(with "keyup")  is used to register which keys are pressed.
 */
window.addEventListener("keyup", (keyboard) => {
    // debugger;
    if (currentLanguage == 'German') {
        if (keyRegister['e'] && keyRegister['l']) {
            currentLanguage = 'English';
            changePokedexLanguage();
        }
    }

    if (currentLanguage == 'English') {
        if (keyRegister['d'] && keyRegister['l']) {
            currentLanguage = 'German';
            changePokedexLanguage();
        }
    }

    keyRegister[keyboard.key] = false;
   
    // const k = e.key;
    // console.log(k);

    // if (entryOpened) {
    //     if (e.keyCode == 39) {
    //         shownextpokemonup(currentOpenedPokemonId);
    //     }
    //     if (e.keyCode == 37) {
    //         shownextpokemondown(currentOpenedPokemonId);
    //     }
    // }
});
