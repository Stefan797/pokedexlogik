async function init() {
    console.log('Das ist eine separate HTML, um die API zu testen!');
    // let apilink = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    // let response = await fetch(apilink);
    // let responseasJson = await response.json();
    // console.log(responseasJson);
    // console.log(responseasJson['count']);
    // console.log(responseasJson['next']);
    // console.log(responseasJson['previous']);
    // console.log(responseasJson.results);
    // console.log(responseasJson.results[0]['name']);
    // console.log(responseasJson.results[0]['url']);

    let firstpokemon = 'https://pokeapi.co/api/v2/pokemon/2/';
    let responseFirstPokemon = await fetch(firstpokemon);
    let responseasJsonFirstPokemon = await responseFirstPokemon.json();
    console.log(responseasJsonFirstPokemon);

    let typeGerman = 'https://pokeapi.co/api/v2/type/12/';
    let test2 = await fetch(typeGerman);
    let resptest2 = await test2.json();
    con(resptest2);

    let move14German = 'https://pokeapi.co/api/v2/move/14/';
    let test3 = await fetch(move14German);
    let resptest3 = await test3.json();
    con(resptest3);

    con(resptest3['names'][4]['name']);
    // con(resptest2['names'][4]['name']);

    let pokemon = responseasJsonFirstPokemon;
    // let link = pokemon['abilities'][1]['ability']['url'];
    // let germanability = `${link}`;
    // let test1 = await fetch(germanability);
    // let resptest1 = await test1.json();
    // con(resptest1);

    // con(pokemon['abilities'][1]['ability']['url']);

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