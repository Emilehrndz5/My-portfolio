// Contenido de cada historia, seleccionado por el parámetro "entrada" de la URL.
const stories = {
  origen: {
    number: 'Nº 001',
    category: 'HISTORIA PERSONAL',
    title: 'De la curiosidad a crear en digital',
    deck: 'Una historia que sigue tomando forma entre diseño, tecnología y nuevas ideas.',
    paragraphs: [
      'Soy Rodrigo, diseñador y desarrollador digital en formación. Me interesa cómo una idea puede convertirse en una experiencia que las personas usan y disfrutan.',
      'Por eso me gusta trabajar entre diseño y desarrollo: pensar cómo se ve algo, cómo funciona y qué tan fácil resulta para quien lo usa. Cada proyecto es una oportunidad para probar, aprender y mejorar.',
      'Mi camino apenas empieza. Actualmente soy practicante en ROO Guatemala y sigo construyendo experiencia, con curiosidad por las herramientas y las posibilidades de crear en digital.'
    ]
  },
  roo: {
    number: 'Nº 002',
    category: 'EXPERIENCIA',
    title: 'Aprender haciendo en ROO Guatemala',
    deck: 'Mi experiencia como practicante en diseño y desarrollo digital.',
    paragraphs: [
      'En 2026 comencé mi práctica en ROO Guatemala como diseñador y desarrollador. Es una oportunidad para involucrarme en proyectos digitales y continuar aprendiendo desde el trabajo real.',
      'Me interesa participar tanto en la parte visual como en la implementación. Ese cruce me ayuda a pensar las experiencias completas: desde la primera idea y la organización de la información hasta los detalles de la interfaz.',
      'Cada reto suma una nueva herramienta a mi proceso y me recuerda que el diseño y el desarrollo se fortalecen cuando se trabaja con atención, curiosidad y colaboración.'
    ]
  },
  boost: {
    number: 'Nº 003',
    category: 'PROYECTO',
    title: 'Una guía para usar Boost',
    deck: 'Diseño y desarrollo de un manual de usuario que explica paso a paso.',
    paragraphs: [
      'El manual de usuario de Boost nació para que las personas puedan descubrir lo que ofrece la plataforma desde la computadora, con instrucciones claras y apoyo visual.',
      'En este proyecto trabajé en el desarrollo de una guía digital que organiza la información en páginas fáciles de consultar. La intención es que cada paso se entienda sin complicaciones.',
      'Me gusta este tipo de trabajo porque combina diseño y desarrollo con una meta concreta: hacer que una herramienta sea más fácil de aprender y usar.'
    ]
  }
};

const key = new URLSearchParams(window.location.search).get('entrada');
const story = stories[key] || stories.origen;
document.title = `${story.title} — Historias de Rodrigo`;
document.querySelector('#article-number').textContent = story.number;
document.querySelector('#article-category').textContent = story.category;
document.querySelector('#article-title').textContent = story.title;
document.querySelector('#article-deck').textContent = story.deck;
document.querySelector('#article-time').textContent = '2026 — 2 MIN';
const content = document.querySelector('#article-content');
story.paragraphs.forEach(text => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  content.append(paragraph);
});

