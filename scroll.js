let lastYScroll = 0;
let allPokemonLoaded = false;

window.onscroll = async function (ev) {
    let percent = (document.body.scrollHeight / window.scrollY) * 100;
    console.log(percent);
    if ((percent >= 90) && !currentloading &&  !allPokemonLoaded) {
        // debugger;
        console.log("SCROLLING DOWN")
        console.log(percent);
        currentloading = true;
        // 
        currentloading = false;
        lastYScroll = ev.scrollY;
    } else if(ev.scrollY <= lastYScroll){
        console.log("SCROLLING UP");
    }
};

window.onscroll = async function (ev) {
    let currentloading = false;
    let percent = (document.body.scrollHeight / window.scrollY) * 100;
    if ((percent >= 90) && !currentloading) {
        
        console.log(percent);
        currentloading = true;
        console.log('going');
        currentloading = false;
    } 
};

async function checkPokemonGenerationStarts(generationNumber) {
    switch (generationNumber) {
        case 1:
            if (!pokemonDict[2]) {
                await loadPokemons(20, 2);
            }
            break;
        case 2:
            if (!pokemonDict[152]) {
                await loadPokemons(20, 151);
                renderPokemonGeneration(152, 251, 2);
            }
            break;
        case 3:
            if (!pokemonDict[252]) {
                await loadPokemons(20, 251);
                renderPokemonGeneration(252, 387, 3);
            }
            break;
        default:
            console.log('default');
    }
}