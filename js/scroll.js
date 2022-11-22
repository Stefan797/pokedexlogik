window.onscroll = async function (ev) {
    debugger;
    if (hasReachedPageBottom() && !currentloading) {
        currentloading = true;
        // debugger;
        let nextPokemonId = await findNextMissingPokemon(checkfindNextMissingPokemonStartValue());
        if (nextPokemonId != null) {
            initializeFoundPokemon(nextPokemonId);
        }
        currentloading = false;
    }
};

function hasReachedPageBottom() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

function checkfindNextMissingPokemonStartValue() {
    if (currentShowedPokedex == 1) {
        return 1;
    }
    if (currentShowedPokedex == 2) {
        return 152;
    }
    if (currentShowedPokedex == 3) {
        return 252;
    }

}

async function findNextMissingPokemon(start) {
    if (start <= 387) {
        for (let i = start; i < 387; i++) {
            if (pokemonDict[i]) {
                continue;
            } else {
                return i;
            }
        }
    } else {
        return null;
    }
}

/**
 * 
 * @param {number} nextPokemonId - ID of next Pokemon 
 */
 async function initializeFoundPokemon(nextPokemonId) {
    let newStartValue = nextPokemonId - 1;
    await loadPokemons(20, newStartValue);
    renderCurrentGeneration(nextPokemonId);
}

function renderCurrentGeneration() {
    if (currentShowedPokedex == 1) {
        renderPokemonGeneration(1, 151, 1);
    }
    if (currentShowedPokedex == 2) {
        renderPokemonGeneration(152, 251, 2);
    }
    if (currentShowedPokedex == 3) {
        renderPokemonGeneration(252, 387, 3);
    }
}