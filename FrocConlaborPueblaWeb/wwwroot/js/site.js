// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('scroll', function () {
  var contacto = document.getElementById('contacto');
  var rect = contacto.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    contacto.classList.add('full-screen-contact');
  } else {
    contacto.classList.remove('full-screen-contact');
  }
});

//codigo para el encabezado

// JavaScript para desplegar automáticamente el submenú cuando el cursor esté sobre "Conoce al SIUTP"
document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.nav-item.dropdown');

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
});
 ///////////////////////////////

