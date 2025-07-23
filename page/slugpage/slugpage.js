const projet = JSON.parse(localStorage.getItem("projet"));

console.log(window.innerWidth)
function isExternalLink(url) {
    return url.startsWith('http://') || url.startsWith('https://');
}

document.getElementById("entete").style.height = `${document.getElementById("background-entete").offsetHeight}px`
document.getElementById("explication").style.top = `${document.getElementById("background-entete").offsetHeight}px}`

if (projet === null) {
    window.location = "../travaux/travaux.html"
}

if (projet.theme) {
    document.querySelectorAll("header a").forEach(element => {
        element.style.color = 'white'
    });
}



document.getElementById("background-entete").src = `../../${projet.presentation}`

document.getElementById("return").addEventListener('click', () => { window.location = "../travaux/travaux.html" })
document.getElementById("entete").style.height = `${document.getElementById("background-entete").offsetHeight}px`
document.title = projet.name
window.addEventListener('resize', () => {
    document.getElementById("entete").style.height = `${document.getElementById("background-entete").offsetHeight}px`
    document.getElementById("explication").style.top = `${document.getElementById("background-entete").offsetHeight}px}`
})
document.getElementById("title").innerHTML = projet.name


let complement = document.getElementById("complement")
let endroit = document.createElement("p")
let date = document.createElement("p")
date.innerHTML = projet.date
endroit.innerHTML = projet.endroit
complement.appendChild(endroit)
complement.appendChild(date)

let explain = document.querySelectorAll("#explication article span")
explain[0].innerHTML = projet.objectif
explain[1].innerHTML = projet.delais

let contenu = document.getElementById("content")
if (Array.isArray(projet.content_presentation)) {
    projet.content_presentation.forEach(element => {
        contenu.style.width = "60%"
        let Content_width = (contenu.offsetWidth - (50 * projet.content_presentation.length)) / projet.content_presentation.length
        let iframe = document.createElement("iframe");
        iframe.width = `${Content_width}px`;
        iframe.height = `${Content_width}px`
        iframe.src = element;
        iframe.title = "YouTube video player";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        contenu.appendChild(iframe);
    });

} else {

    if (isExternalLink(projet.content_presentation)) {
        let iframe = document.createElement("iframe");
        iframe.width = "1000px";
        iframe.height = "600px"
        iframe.src = projet.content_presentation;
        iframe.title = "YouTube video player";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        contenu.appendChild(iframe);
    } else {
        img = document.createElement("img")
        img.src = `../../${projet.content_presentation}`
        contenu.appendChild(img);
    }
}

let context = document.createElement("p")
context.innerHTML = projet.context
document.getElementById("context").appendChild(context)
let demarche = document.createElement("p")
demarche.innerHTML = projet.demarche
document.getElementById("Demarche").appendChild(demarche)

projet.logiciel.forEach(logiciel => {
    let image = document.createElement("img")
    image.src = `../../${logiciel}`
    document.getElementById("image").appendChild(image)

})

projet.competence.forEach(element => {
    let liste = document.createElement("li")
    liste.innerHTML = element
    document.querySelector("#Competence ul").appendChild(liste)
})

if (projet.complement) {
    let image = document.createElement("img")
    image.src = `../../${projet.complement}`
    image.id = "complement"
    document.getElementById("detail").appendChild(image)
}

