document.addEventListener("DOMContentLoaded", function () {
  const comunicadoLinks = document.querySelectorAll(".comunicado-link");
  const detalleComunicado = document.getElementById("detalleComunicado");

  comunicadoLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que la página recargue

      // Obtener datos del comunicado seleccionado
      const imgSrc = this.getAttribute("data-img");
      const titulo = this.getAttribute("data-titulo");
      const texto = this.getAttribute("data-texto");

      // Actualizar la sección de detalles
      detalleComunicado.innerHTML = `
                <div class="card comunicado-card">
                    <img src="${imgSrc}" class="card-img-top" alt="${titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">${texto}</p>
                    </div>
                </div>
            `;

      // Remover la clase "active" de todos los enlaces
      comunicadoLinks.forEach(item => item.classList.remove("active"));

      // Agregar la clase "active" al comunicado seleccionado
      this.classList.add("active");
    });
  });
});
