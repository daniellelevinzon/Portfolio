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