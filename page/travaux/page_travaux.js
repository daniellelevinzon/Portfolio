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