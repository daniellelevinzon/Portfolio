Array.from(document.getElementsByClassName("item")).forEach(element => {
    element.addEventListener("click", ()=>{
        window.location = "page/travaux/travaux.html"
    })
    
});

document.getElementById("head").addEventListener('click',()=>{
    window.location = "page/presentation/about_me.html"
})

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
  }, 1000);
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

let mouseMoveActive = false;
function mouseMoveHandler(e) {
  //on récupère les positions nécessaire au mouvement du fond (position de la souris et la taille de l'ecran)
  let mousePosX = e.clientX
  let mousePosY = e.clientY
  let width = window.innerWidth
  let height = window.innerHeight
  //puis le pourcentage de la position de la souris 
  let PosMousePourcentageY = Math.round(mousePosY * 100 / height)
  let PosMousePourcentageX = Math.round(mousePosX * 100 / width)
  //puis ensuite un pourcentage sur 5 car j'ai rajouter 5% a la taille de l'image de fond
  let PosBackgroundY = Math.round((PosMousePourcentageY * 5 / 100))
  let PosBackgroundX = Math.round((PosMousePourcentageX * 5 / 100))
  document.body.style.backgroundPosition = `${-PosBackgroundX + 5}% ${-PosBackgroundY + 5}% `
  document.getElementById("img_pinceau").style.marginLeft = `${PosBackgroundX * 10}px`
  document.getElementById("img_pinceau").style.marginTop = `${PosBackgroundY * 10}px`

  document.getElementById("img_barrette").style.marginLeft = `${PosBackgroundX * 10}px`
  document.getElementById("img_barrette").style.marginTop = `${PosBackgroundY * 2- 50}px`

  document.getElementById("chat").style.marginLeft = `${PosBackgroundX * 30}px`
  document.getElementById("chat").style.marginTop = `${PosBackgroundY * 30}px`

  document.getElementById("collier").style.marginLeft = `${PosBackgroundX * 30}px`
  document.getElementById("collier").style.marginTop = `${PosBackgroundY * 30}px`

  document.getElementById("items").style.marginLeft = `${PosBackgroundX * 7}px`
  document.getElementById("items").style.marginTop = `${PosBackgroundY * 7 + 50}px`
}

function checkScreen() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    if (!mouseMoveActive) {
      document.addEventListener("mousemove", mouseMoveHandler);
      mouseMoveActive = true;
    }
  } else {
    if (mouseMoveActive) {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.documentElement.style.overflow = "hidden"
      mouseMoveActive = false;
    }
    // Remettre toutes les images à leur position d'origine
    document.body.style.backgroundPosition = "";
    document.getElementById("img_pinceau").style.marginLeft = "";
    document.getElementById("img_pinceau").style.marginTop = "";

    document.getElementById("img_barrette").style.marginLeft = "";
    document.getElementById("img_barrette").style.marginTop = "";

    document.getElementById("chat").style.marginLeft = "";
    document.getElementById("chat").style.marginTop = "";

    document.getElementById("collier").style.marginLeft = "";
    document.getElementById("collier").style.marginTop = "";

    document.getElementById("items").style.marginLeft = "";
    document.getElementById("items").style.marginTop = "";
  }
}

window.addEventListener("resize", checkScreen);
checkScreen();