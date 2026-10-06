# Portafolio de Rodrigo

Sitio estático hecho con HTML, CSS y JavaScript. Se puede abrir directamente desde `index.html`; no necesita instalar dependencias.

## Estructura

- `index.html`: página principal, proyectos, experiencia y contacto.
- `historias.html`: archivo público de historias.
- `leer-historia.html`: plantilla que muestra una historia según el parámetro `entrada` de la URL.
- `escribir-historia.html`: editor para redactar y guardar un borrador en el navegador actual.
- `styles.css`: estilos compartidos, agrupados por página y sección.
- `js/nav.js`: menú compartido entre páginas.
- `js/effects.js`: animaciones de entrada que respetan la preferencia de movimiento reducido.
- `js/main.js`: envío del formulario de contacto por correo.
- `js/read-story.js`: textos de los artículos del archivo.
- `js/write-story.js`: guardado y restauración del borrador personal.
- `assets/`: imágenes y gráficos usados por el sitio.

## Cambiar contenido

- Edita los títulos y las tarjetas del archivo en `historias.html`.
- Edita los textos de cada artículo en `js/read-story.js`.
- Edita los proyectos y la experiencia en `index.html`.
- Los cambios escritos en `escribir-historia.html` se guardan en `localStorage` del navegador y dispositivo actuales; ese borrador no se publica automáticamente en el sitio.
- Para actualizar la imagen del proyecto Boost, reemplaza `assets/boost-manual.png` y conserva el mismo nombre de archivo.
