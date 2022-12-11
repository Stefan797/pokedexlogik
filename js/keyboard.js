RIGHT = false;
LEFT = false;

window.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});


/**
 * The window.addEventlistener(with "keyup")  is used to register which keys are pressed.
 */
window.addEventListener("keyup", e => {
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
