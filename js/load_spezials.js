function headerpokemon() {
    const headerpokemon = pokemonDict[4];
    if (headerpokemon) {
        imagepath = headerpokemon['sprites']['other']['dream_world']['front_default']
        document.getElementById('headerpokemon').src = imagepath;
    }
}