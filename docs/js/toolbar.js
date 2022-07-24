function expandMobileMenu() {
  var menu = document.getElementById("topnav");
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
}
