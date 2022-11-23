window.onscroll = async function (ev) {
    // debugger;
    if (hasReachedPageBottom() && !currentloading && checkGenerationLoadingEndpoint()) {
        currentloading = true;
        await nextsteps();
        currentloading = false;
    }
};

async function nextsteps() {
    let nextPokemonId = await findNextMissingPokemon(checkfindNextMissingPokemonStartValue());
    if (nextPokemonId != null) {
        await initializeFoundPokemon(nextPokemonId);
    }
}

function checkGenerationLoadingEndpoint() {
    switch (currentShowedPokedex) {
        case 1:
            if (!pokemonDict[151]) {
                return true;
            }
            break;
        case 2:
            if (!pokemonDict[251]) {
                return true;
            }
            break;
        case 3:
            if (!pokemonDict[387]) {
                return true;
            }
            break;
    }
}

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