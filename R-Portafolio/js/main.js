// Prepara un correo con los datos ingresados en el formulario de contacto.
document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(form.get('asunto'));
  const body = encodeURIComponent(
    `Nombre: ${form.get('nombre')}\nCorreo: ${form.get('correo')}\n\nMensaje:\n${form.get('mensaje')}`
  );
  document.querySelector('.form-note').textContent =
    'Abriendo tu aplicación de correo para enviar el mensaje…';
  window.location.href = `mailto:rodrigohrndz308@gmail.com?subject=${subject}&body=${body}`;
});
