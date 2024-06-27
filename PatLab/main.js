function selectOption(option) {
  alert("Opción seleccionada: " + option);
  document.getElementById("myDropdown").style.display = "none";
}

// Función para cerrar la barra desplegable si se hace clic fuera de ella
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
