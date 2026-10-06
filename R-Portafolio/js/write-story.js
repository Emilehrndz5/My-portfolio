// El borrador se conserva en el navegador de este dispositivo.
const storageKey = 'rodrigo-portfolio-story-v1';
const form = document.querySelector('#story-form');
const status = document.querySelector('#save-status');
const initialValues = Object.fromEntries(new FormData(form));

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if (saved) {
    Object.entries(saved).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });
  }
} catch {
  status.textContent = 'No se pudo cargar el borrador guardado.';
}

form.addEventListener('input', () => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(new FormData(form))));
    status.textContent = 'Borrador guardado automáticamente en este dispositivo.';
  } catch {
    status.textContent = 'No se pudo guardar. Revisa la configuración del navegador.';
  }
});

document.querySelector('#reset-story').addEventListener('click', () => {
  Object.entries(initialValues).forEach(([key, value]) => {
    form.elements[key].value = value;
  });
  localStorage.removeItem(storageKey);
  status.textContent = 'Borrador inicial restaurado.';
});
