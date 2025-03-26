// wwwroot/js/login.js
document.addEventListener('DOMContentLoaded', function () {
  // Configuración del toggle de password
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const eyeIcon = togglePassword.querySelector('i');

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      eyeIcon.classList.toggle('bi-eye');
      eyeIcon.classList.toggle('bi-eye-slash');
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = passwordInput.value;

      if (!email || !password) {
        alert('Por favor complete todos los campos');
        return;
      }

      console.log('Datos del formulario:', { email, password });

      // Simulación de redirección después de login exitoso
      // window.location.href = '/Home/Index';
    });
  }
});