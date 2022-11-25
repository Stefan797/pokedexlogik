function closesingleEntry() {
    document.getElementById('background_container').classList.add('z-index-minus');
    document.getElementById('first_header').classList.remove('d-none');
    document.getElementById('header').classList.remove('d-none');
    let singleEntryContent = document.getElementById('singleEntry');
    singleEntryContent.classList.add('d-none');
}

function getHtmlforSingleEntry(entrypokemon) {
    return `${entrypokemon['id']}
    <img src="${entrypokemon['sprites']['other']['dream_world']['front_default']}">
    `;
}