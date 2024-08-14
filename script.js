let dark = document.getElementById("DMode")
function darkMode(){
    document.body.style.backgroundColor = `rgb(0,0,0)`
}
dark.addEventListener("click", darkMode)

let Rain = document.getElementById("quote")
function genRanQot(){
    const Quotes = ["The secret of getting ahead is getting started", "The very things that holdyou down are going to lift you up.", "'When life give you lemons, make lemonade", "The price of greatness is responsibility",];
    const RandomIndex = Math.floor(Math.random()*Quotes.length);
    document.getElementById("quote").textContent = Quotes[RandomIndex];
}
document.getElementById("NewButton").addEventListener("click", genRanQot)