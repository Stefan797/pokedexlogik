let pokemon = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    150: {},
    151: {},
    152: {},
    153: {}
};

function findNextMissingPokemon(start = 1) {
    for (let i = start; i < 1500; i++) {
        if (pokemon[i]) {
            continue;
        } else {
            return i;
        }
    }
}

console.log(findNextMissingPokemon(150));