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