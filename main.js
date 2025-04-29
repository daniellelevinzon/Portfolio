document.addEventListener("mousemove", e => {
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
    document.getElementById("img_barrette").style.marginTop = `${PosBackgroundY * 10}px`

    document.getElementById("chat").style.marginLeft = `${PosBackgroundX * 30}px`
    document.getElementById("chat").style.marginTop = `${PosBackgroundY * 30}px`

        document.getElementById("collier").style.marginLeft = `${PosBackgroundX * 30}px`
    document.getElementById("collier").style.marginTop = `${PosBackgroundY * 30}px`

    document.getElementById("items").style.marginLeft = `${PosBackgroundX * 7}px`
    document.getElementById("items").style.marginTop = `${PosBackgroundY * 7 + 50}px`
})
