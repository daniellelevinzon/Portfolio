const projet = JSON.parse(localStorage.getItem("projet"));
let size = window.offsetHeight

if (projet === null) {
    window.location = "../travaux/travaux.html"
}

if (projet.theme) {
    document.querySelectorAll("header a")[0].style.color = 'white'
}

document.getElementById("background-entete").src = `../../${projet.presentation}`

document.getElementById("return").addEventListener('click', () => { window.location = "../travaux/travaux.html" })
document.getElementById("entete").style.height = `${document.getElementById("background-entete").offsetHeight}px`
document.title = projet.name
window.addEventListener('resize', () => {
    document.getElementById("entete").style.height = `${document.getElementById("background-entete").offsetHeight}px`
})
document.getElementById("title").innerHTML = projet.name


let complement = document.getElementById("complement")
let endroit = document.createElement("p")
let date = document.createElement("p")
date.innerHTML = projet.date
endroit.innerHTML = projet.endroit
complement.appendChild(endroit)
complement.appendChild(date)
let


