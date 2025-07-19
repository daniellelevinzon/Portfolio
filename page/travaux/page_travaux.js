let list = document.getElementById("theme")
let category = ["UI Design", "Illustration", "Motion design/Animation", "Graphisme", "Tout"]
let allProjects

function displayProjects(filter) {
    let cardsContainer = document.getElementById('cards')
    cardsContainer.innerHTML = "" // Supprime tous les projets affichés

    let filtered = filter === "Tout"
        ? allProjects
        : allProjects.filter(projet => projet.tag.includes(filter))

    filtered.forEach((projet, index) => {
        let card = document.createElement('div')
        card.id = index
        card.classList.add("card")
        card.style.backgroundImage = `url(../../${projet.card})`
        cardsContainer.appendChild(card)

        let text = document.createElement("p")
        text.innerHTML = projet.endroit
        card.appendChild(text)

        let titre = document.createElement("h2")
        titre.innerHTML = projet.name
        card.appendChild(titre)

        card.addEventListener("mouseenter", () => {
            text.style.display = "block"
            titre.style.display = "block"
        })

        card.addEventListener("mouseleave", () => {
            titre.style.display = "none"
            text.style.display = "none"
        })

<<<<<<< HEAD
        card.addEventListener("click", () => {
            console.log(projet.name)
=======
        card.addEventListener("click",()=>{
>>>>>>> parent of 89cb206 (ajout du bas de page dans le travaux + avancement de la sslugpage)
            localStorage.setItem("project", `${projet.name}`);
        })
    })
}

category.forEach(Element => {
    let list_element = document.createElement("li");
    list_element.id = Element;
    list_element.textContent = Element;
    list.appendChild(list_element);

    list_element.addEventListener("click", () => {
        console.log(list_element.innerHTML);

        if (document.getElementsByClassName("selected").length > 0) {
            document.querySelectorAll(".selected").forEach(obj => {
                obj.classList.remove("selected")
            })
        }
        list_element.classList.add("selected")
        displayProjects(Element)
    });
})

fetch('../../experience.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        allProjects = data
        data.forEach((projet, index) => {
            console.log(projet)



            let card = document.createElement('div')
            card.id = index
            card.classList.add("card")
            card.style.backgroundImage = `url(../../${projet.card})`
            document.getElementById('cards').appendChild(card)


            let text = document.createElement("p")
            text.innerHTML = projet.endroit
            card.appendChild(text)



            let titre = document.createElement("h2")
            titre.innerHTML = projet.name
            card.appendChild(titre)



            card.addEventListener("mouseenter", () => {
                text.style.display = "block"
                titre.style.display = "block"
            })


            card.addEventListener("mouseleave", () => {
                titre.style.display = "none"
                text.style.display = "none"
            })



            card.addEventListener("click",()=>{
<<<<<<< HEAD
                console.log(projet.name)
                localStorage.setItem("projet",  JSON.stringify(data.find(p => p.name === projet.name)));
=======
                localStorage.setItem("project", `${projet.name}`);
<<<<<<< HEAD
>>>>>>> 90841b8050413e8422d2653318bf83af17a68473
                window.location.href = "../slugpage/slug_one.html"
=======
>>>>>>> parent of 89cb206 (ajout du bas de page dans le travaux + avancement de la sslugpage)
            })

        })

    }
    )