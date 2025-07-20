const projet = JSON.parse(localStorage.getItem("projet"));
function isExternalLink(url) {
    return url.startsWith('http://') || url.startsWith('https://');
}


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

let contenu = document.getElementById("content")

if(isExternalLink(projet.content_presentation)){
    let iframe = document.createElement("iframe");
    iframe.width = "1000px";
    iframe.height = "600px"
    iframe.src = projet.content_presentation;
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    contenu.appendChild(iframe);
}else{
    img = document.createElement("img")
    img.height = "600px"
    img.width = "1000px"
    img.src = `../../${projet.content_presentation}`
    contenu.appendChild(img);
}


