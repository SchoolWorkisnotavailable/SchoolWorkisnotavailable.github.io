let dark = document.querySelector("button")
function darkMode(){
    document.body.style.backgroundColor = `rgb(0,0,0)`
    alert("Dark mode activated")
}
dark.addEventListener("click", darkMode)