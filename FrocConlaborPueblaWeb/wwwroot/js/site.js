// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("conoceAlSIUTP");
  const dropdownMenu = dropdown.nextElementSibling;

  // Detectar si es un dispositivo táctil
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  if (!isTouchDevice()) {
    // Funcionalidad en PC (hover)
    dropdown.addEventListener("mouseenter", function () {
      dropdownMenu.classList.add("show");
    });

    dropdownMenu.addEventListener("mouseleave", function () {
      setTimeout(() => {
        if (!dropdown.matches(":hover") && !dropdownMenu.matches(":hover")) {
          dropdownMenu.classList.remove("show");
        }
      }, 300);
    });
  } else {
    // Funcionalidad en móviles (clic)
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que el clic se propague a otros elementos

      // Alternar el estado del menú
      const isOpen = dropdownMenu.classList.contains("show");

      // Si el menú está abierto, lo cerramos. Si está cerrado, lo abrimos
      if (isOpen) {
        dropdownMenu.classList.remove("show");
      } else {
        dropdownMenu.classList.add("show");
      }
    });

    // Cerrar el menú si se toca fuera de él
    document.addEventListener("click", function (event) {
      // Si se hace clic fuera del dropdown o del menú, cerramos el menú
      if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }
});


