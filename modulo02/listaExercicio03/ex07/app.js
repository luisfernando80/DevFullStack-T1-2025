const elementoHeader = document.getElementById("header");
const elementoMenu = document.getElementById("menu-hamb");
const elementoClose = document.getElementById("btn-close");

elementoMenu.addEventListener("click", () => {
  elementoHeader.classList.toggle("aberto");
});

elementoClose.addEventListener("click", () => {
  elementoHeader.classList.remove("aberto");
});
