let list = document.getElementById("theme");
let category = ["UI Design", "Illustration", "Motion design/Animation", "Graphisme", "Tout"];
let allProjects;

function displayProjects(filter) {

    let cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = "";
    let filtered = filter == "Tout"
        ? allProjects
        : allProjects.filter(projet => projet.tag.includes(filter));

    filtered.forEach((projet, index) => {
        let card = document.createElement('div');
        card.id = index;
        card.classList.add("card");
        card.style.backgroundImage = `url(../../${projet.card})`;
        cardsContainer.appendChild(card);

        let text = document.createElement("p");
        text.innerHTML = projet.endroit;
        text.style.fontFamily = "botak"
        card.appendChild(text);

        let titre = document.createElement("h2");
        titre.innerHTML = projet.name;
        card.appendChild(titre);

        card.addEventListener("mouseenter", () => {
            text.style.display = "block";
            titre.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
            titre.style.display = "none";
            text.style.display = "none";
        });

        card.addEventListener("click", () => {
            localStorage.setItem("projet", JSON.stringify(projet));
            window.location.href = "../slugpage/slug_one.html";
        });
    });
}

category.forEach(Element => {
    let list_element = document.createElement("li");
    list_element.id = Element;
    list_element.textContent = Element;
    list.appendChild(list_element);

    list_element.addEventListener("click", () => {
        console.log(list_element.innerHTML);
        displayProjects(list_element.innerHTML)
        if (document.getElementsByClassName("selected").length > 0) {
            document.querySelectorAll(".selected").forEach(obj => {
                obj.classList.remove("selected");
            });
        }
        list_element.classList.add("selected");
    });
});

fetch('../../experience.json')
    .then(response => response.json())
    .then(data => {
        allProjects = data;
        displayProjects("Tout"); // Affichage initial avec tous les projets
    });


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
    }, 800);
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

