let dark = document.getElementById("DMode")
function darkMode(){
    document.body.style.backgroundColor = `rgb(0,0,0)`
}
dark.addEventListener("click", darkMode)

let Rain = document.getElementById("quote")
function genRanQot(){
    const Quotes = ["'Quote1'", "Quote2", "Quote3", "Quote4",];
    const RandomIndex = Math.floor(Math.random()*Quotes.length);
    document.getElementById("quote").textContent = Quotes[RandomIndex];
}
document.getElementById("NewButton").addEventListener("click", genRanQot)