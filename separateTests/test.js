async function init() {
    console.log('Das ist eine separate HTML, um die API zu testen!');

    // let apilink = `https://pokeapi.co/api/v2/pokemon-species?limit=10&offset=0`;
    // let response = await fetch(apilink);
    // let responseasJson = await response.json();
    // console.log(responseasJson);
    
    // let apilink = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    // let response = await fetch(apilink);
    // let responseasJson = await response.json();
    // console.log(responseasJson);


    // let pokemonImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg';
    // let pokemonImgpath = responseImg['url'];
    // pokemonImgpath = await fetch(pokemonImg);
    // console.log(responseImg['url']);

    // let containerContent = document.getElementById('container');
    // containerContent.innerHTML += `<img src="${responseImg['url']}">`;



    // console.log(responseasJson['count']);
    // console.log(responseasJson['next']);
    // console.log(responseasJson['previous']);
    // console.log(responseasJson.results);
    // console.log(responseasJson.results[0]['name']);
    // console.log(responseasJson.results[0]['url']);

    let firstpokemon = 'https://pokeapi.co/api/v2/pokemon/25/';
    let responseFirstPokemon = await fetch(firstpokemon);
    let responseasJsonFirstPokemon = await responseFirstPokemon.json();
    console.log(responseasJsonFirstPokemon);

    // let typeGerman = 'https://pokeapi.co/api/v2/type/12/';
    // let test2 = await fetch(typeGerman);
    // let resptest2 = await test2.json();
    // con(resptest2);

    // let move14German = 'https://pokeapi.co/api/v2/move/14/';
    // let test3 = await fetch(move14German);
    // let resptest3 = await test3.json();
    // con(resptest3);

    // con(resptest3['names'][4]['name']);
    // // con(resptest2['names'][4]['name']);

    // let pokemon = responseasJsonFirstPokemon;
    // // let link = pokemon['abilities'][1]['ability']['url'];
    // // let germanability = `${link}`;
    // // let test1 = await fetch(germanability);
    // // let resptest1 = await test1.json();
    // // con(resptest1);

    // // con(pokemon['abilities'][1]['ability']['url']);
    // let name = pokemon['species']['url'];
    // let pokemonNameInGerman = 'https://pokeapi.co/api/v2/pokemon-species/4/';
    // let resp = await fetch(pokemonNameInGerman);
    // let pespAsJson = await resp.json();
    // console.log(pespAsJson);

    // console.log(pespAsJson['names'][5]['name']);

    // let pokemonLanguage = 'https://pokeapi.co/api/v2/language/6/';
    // let responsePokemonLanguage = await fetch(pokemonLanguage);
    // let responseasJsonPokemonLanguage = await responsePokemonLanguage.json();
    // console.log(responseasJsonPokemonLanguage);


    // loadOhterPokemonJson(pokemon) {
    // let pokemonType = pokemon['types'][0]['type']['url'];
    // let type = pokemonType;
    // let test2 = await fetch(type);
    // let resptest2 = await test2.json();
    // con(resptest2);
    // let pokemontype = resptest2;
    // let pokemonImgDict = pokemon['sprites']['other']['dream_world']['front_default'];
    // console.log(pokemonImgDict);
    // }

    // function test(params) {
    //     let pokemonSpeciesLink = pokemon['species']['url'];
    //     let resp = await fetch(pokemonSpeciesLink);
    //     let pespAsJson = await resp.json();
    //     let pokemonSpecies = pespAsJson;
    // }

    // let headerpokemons = [1, 2, 3, 4, 5, 6];

    // function headerpokemon() {
    //     for (var x in headerpokemons) {
    //         setInterval(function () {
    //             const headerpokemon = pokemonDict[x];
    //             if (headerpokemon) {
    //                 imagepath = headerpokemon['sprites']['other']['dream_world']['front_default']
    //                 document.getElementById('headerpokemon').src = imagepath;
    //             }
    //         }, 1000);
    //     }
    // }

//     <div style="
//     width: 151px;
//     height: 151px;
//     border-radius: 100%;
//     border: 1px solid #466E9A;
//     position: absolute;
//     /* box-shadow: inset 0px 0px 10px 0px #0C1721; */
//     box-shadow: inset 0px 0px 50px 24px #466E9A;
//     z-index: 1;
//     "></div>

//     <div style="
//     width: 70%;
//     height: 60%;
//     /* border-radius: 50%; */
//     /* border: 2px solid white; */
//     position: relative;
//     display: flex;
//     align-items: center;
// "><div style="
//     width: 151px;
//     height: 151px;
//     border-radius: 100%;
//     border: 1px solid #466E9A;
//     position: absolute;
//     /* box-shadow: inset 0px 0px 10px 0px #0C1721; */
//     box-shadow: inset 0px 0px 50px 24px #466E9A;
//     z-index: 1;
// "></div>

// <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg">
//         </div>
}