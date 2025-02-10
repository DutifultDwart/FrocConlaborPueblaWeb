// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.nav-item.dropdown');

  dropdowns.forEach(function (dropdown) {
    // Evento para dispositivos con mouse
    dropdown.addEventListener('mouseover', function () {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      toggle.classList.add('show');
      menu.classList.add('show');
    });

    dropdown.addEventListener('mouseout', function () {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      toggle.classList.remove('show');
      menu.classList.remove('show');
    });

    // Evento para dispositivos táctiles
    dropdown.addEventListener('click', function () {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      toggle.classList.toggle('show');
      menu.classList.toggle('show');
    });
  });
});

document.addEventListener('click', function (event) {
  var dropdowns = document.querySelectorAll('.nav-item.dropdown');
  dropdowns.forEach(function (dropdown) {
    if (!dropdown.contains(event.target)) {
      var menu = dropdown.querySelector('.dropdown-menu');
      var toggle = dropdown.querySelector('.dropdown-toggle');
      toggle.classList.remove('show');
      menu.classList.remove('show');
    }
  });
}); 