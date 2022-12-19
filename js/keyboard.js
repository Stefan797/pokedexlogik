// RIGHT = false;
// LEFT = false;

let test = {
 68 : false, // d
 76 : false // l
};

window.addEventListener("keydown", (e) => {
    console.log(e);
    const k = e.key;
    test[e.keyCode] = true;

    if (test[68] && test[76]) {
       
        currentLanguage = 'English';
        changePokedexLanguage();
    }

    console.log(currentLanguage);

    // if (entryOpened) {
    //     if (e.keyCode == 39) {
    //         shownextpokemonup(currentOpenedPokemonId);
    //     }
    //     if (e.keyCode == 37) {
    //         shownextpokemondown(currentOpenedPokemonId);
    //     }
    // }

    // if (e.keyCode == 13) {
    //     keyboard.ENTER = true;

    //     if (world.youwin) {
    //         location.reload();
    //     }

    //     if (world.gameover) {
    //         location.reload();
    //     }
    // }
});


/**
 * The window.addEventlistener(with "keyup")  is used to register which keys are pressed.
 */
window.addEventListener("keyup", e => {
    test[e.keyCode] = false;
    const k = e.key;
    console.log(k);

    if (entryOpened) {
        if (e.keyCode == 39) {
            shownextpokemonup(currentOpenedPokemonId);
        }
        if (e.keyCode == 37) {
            shownextpokemondown(currentOpenedPokemonId);
        }
    }
});
