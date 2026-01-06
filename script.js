const menu = document.getElementById("menu");

function toggleMenu() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function (e) {
  if (!e.target.matches("button")) {
    menu.style.display = "none";
  }
};
