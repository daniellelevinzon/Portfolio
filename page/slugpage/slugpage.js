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
        iframe.style.marginTop =`10%`
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
        iframe.style.marginTop = `10%`
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

let menu_burger = document.getElementById("burger")
let close = document.getElementById("close")

menu_burger.addEventListener("click", () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  let menu = document.createElement("div")
  menu.id = "menu"
  let dataMenu = menu_burger.getBoundingClientRect()
  let height = dataMenu.y + (dataMenu.height / 2)
  let width = dataMenu.x + (dataMenu.width / 2)
  menu.style.borderRadius = "50%"
  menu.style.backgroundColor = "rgba(238, 111, 125, 1)"
  menu.style.position = "absolute"
  menu.style.top = `${height}px`
  menu.style.left = `${width}px`
  menu.classList.add("open")
  document.body.appendChild(menu)
  setTimeout(() => {


    menu.style.zIndex = "1";
    menu.style.borderRadius = "0";
    menu.style.top = `0`;
    menu.style.left = `0`;
    menu.classList.remove('open');
    menu.style.width = `${window.innerWidth}px`;
    menu.style.height = `${window.innerHeight}px`;
    document.getElementById("content_menu").style.display = "flex"
    document.getElementById("content_menu").classList.add('apparition')
    document.getElementById('content_menu').style.zIndex = "10"
  }, 2000);
})

close.addEventListener('click', () => {
  // Animation de fermeture du menu rond
  const menu = document.getElementById('menu');
  menu.classList.add('closer');
  menu.classList.remove('open');
  setTimeout(() => {
    menu.remove();
  }, 1000);


  // Animation disparition du menu principal
  const contentMenu = document.getElementById("content_menu");
  contentMenu.classList.remove('apparition');
  contentMenu.classList.add('disparition');
  setTimeout(() => {
    contentMenu.style.display = "none";
    contentMenu.classList.remove('disparition');
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, 500); // Durée de l'animation 'dispawn'
});
