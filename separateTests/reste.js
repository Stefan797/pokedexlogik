// let previousSpiecesLength = 0; // initial value
// async function loadPokemonsSpieces(addlength, newForLoopStartValue) {
//     // debugger;
//     if (!pokemonDict[21]) {

//         let newlength = addlength - 1;
//         let start = newForLoopStartValue;

//         for (let s = start; s < newlength; s++) {

//             let pokemonapispeciesurl = `https://pokeapi.co/api/v2/pokemon-species/${s}/`;
//             let response = await fetch(pokemonapispeciesurl);
//             let responseasJson = await response.json();
//             // console.log(responseasJson);
//             const element = responseasJson;
//             // const pokemonSpe = responseasJson[element];
//             pokemonSpeciesDict[element['id']] = element;
//             console.log(element['id']);
//         }

//     } else if (pokemonDict[21]) {
//         // debugger;
//         previousSpiecesLength += 21 + addlength;
//         let newlength = previousSpiecesLength;
//         // lastlength = newlength;
//         let start = newForLoopStartValue + 1;

//         for (let s = start; s < newlength; s++) {

//             let pokemonapispeciesurl = `https://pokeapi.co/api/v2/pokemon-species/${s}/`;
//             let response = await fetch(pokemonapispeciesurl);
//             let responseasJson = await response.json();
//             // console.log(responseasJson);
//             const element = responseasJson;
//             // const pokemonSpe = responseasJson[element];
//             pokemonSpeciesDict[element['id']] = element;
//             console.log(element['id']);
//         }


//     }
// }