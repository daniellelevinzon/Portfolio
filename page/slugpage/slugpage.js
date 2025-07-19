const projet = JSON.parse(localStorage.getItem("projet"));

if(projet === null){
    window.location = "../travaux/travaux.html"
}

if(projet.theme){
    document.querySelectorAll("header a")[0].style.color = 'white'
}

document.getElementById("background-entete").src = `../../${projet.presentation}`

document.getElementById("return").addEventListener('click', ()=> {window.location = "../travaux/travaux.html"})