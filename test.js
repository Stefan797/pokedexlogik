async function init() {
    console.log('Das ist eine separate HTML, um die API zu testen!');
    let apilink = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    let response = await fetch(apilink);
    let responseasJson = await response.json();
    // console.log(responseasJson);
    // console.log(responseasJson['count']);
    // console.log(responseasJson['next']);
    // console.log(responseasJson['previous']);
    // console.log(responseasJson.results);
    // console.log(responseasJson.results[0]['name']);
    // console.log(responseasJson.results[0]['url']);

    let firstpokemon = 'https://pokeapi.co/api/v2/pokemon/1/';
    let responseFirstPokemon = await fetch(firstpokemon);
    let responseasJsonFirstPokemon = await responseFirstPokemon.json();
    console.log(responseasJsonFirstPokemon);

    let pokemonNameInGerman = 'https://pokeapi.co/api/v2/pokemon-species/4/';
    let resp = await fetch(pokemonNameInGerman);
    let pespAsJson = await resp.json();
    console.log(pespAsJson);

    console.log(pespAsJson['names'][5]['name']);


    // let pokemonLanguage = 'https://pokeapi.co/api/v2/language/6/';
    // let responsePokemonLanguage = await fetch(pokemonLanguage);
    // let responseasJsonPokemonLanguage = await responsePokemonLanguage.json();
    // console.log(responseasJsonPokemonLanguage);
}