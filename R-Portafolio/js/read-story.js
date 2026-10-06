// Contenido de cada historia, seleccionado por el parámetro "entrada" de la URL.
const stories = {
  origen: {
    number: 'Nº 001',
    category: 'HISTORIA PERSONAL',
    title: 'Rodrigo',
    deck: 'Un niño fan de los videojuegos que descubrió un mundo en pandemia.',
    paragraphs: [
      'Soy Rodrigo, un joven de 17 años que apenas va creciendo en este mundo de la tecnología y programación la verdad también me gusta este mundo por los videojuegos, desde los 5 años entre a este mundo con la Wii siempre me pareció magnifico como ver ese mundo y cuando tuve mi ps4 a los 10 años fue un nuevo mundo totalmente Yo empece a ver la programación quizás desde los 13 años, pero verdaderamente solo me había enterado por amigos',
      'No practique realmente la programación hasta los 16 años cuando entre a mi carrera de Computación y descubrí que podia hacer muchas cosas, fui aprendiendo cosas básicas el colegio y ahora que tengo 17 años cuando entre a este proceso de prácticas me di cuenta lo mucho que puedo crear, soy una persona que le gusta mucho ganar conocimiento pero sinceramente en la programación descubrí un mundo gigante que no es tan fácil siempre, pero me emociona crear cosas por mi mismo, sinceramente me hubiera gustado empezar antes en este mundo porque aunque lleva tiempo es divertido crear tus cosas, tengo muchos ejemplos en la vida que esto es algo grande y que no es tarde apenas tengo 17 años, todavía me queda un gran mundo va, si pudiera agradecerle a algunas personas en mi proceso seria a mi hermano, mi mamá, mis amigos y al grupo de desarrollo de Roo, realmente su experiencia me ha motivado y me llevo el recuerdo y la experiencia de estas cosas, gracias especialmente también a mi amigo que me introdujo en esto y el tiempo me ha mostrado que aunque mi objetivo no sea fácil, nunca debo rendirme.'
    ]
  },
  roo: {
    number: 'Nº 002',
    category: 'EXPERIENCIA',
    title: 'Aprender haciendo en ROO Guatemala',
    deck: 'Mi experiencia como practicante.',
    paragraphs: [
      'En 2026 comencé mi práctica en ROO Guatemala. Es una oportunidad para involucrarme en proyectos digitales y continuar aprendiendo desde el trabajo real.',
      'Me interesa participar tanto en la parte visual como en la implementación. Ese cruce me ayuda a pensar las experiencias completas: desde la primera idea y la organización de la información hasta los detalles de la interfaz.',
      'Cada reto suma una nueva herramienta a mi proceso y me recuerda que el diseño y el desarrollo se fortalecen cuando se trabaja con atención, curiosidad y colaboración.'
    ]
  },
  boost: {
    number: 'Nº 003',
    category: 'CARTA',
    title: 'Una carta para mi',
    deck: 'Una dedicatoria a quien soy.',
    paragraphs: [
      'Esta carta va para mi en cualquier momento la puedo leer, esta carta la escribo apenas con 17 años, mira rodri vos todavía tenes un gran mundo ahi afuera. El estrés, los problemas, todo va a ser normal, tenes gente que te apoya y sabes que eso es muy importante para vos, valora a la gente que esta ahi. No dejes de luchar y esforzate más, ya se que te gana la hueva o te estresa no saber que hacer, pero créeme que yo se que vos con esfuerzo sos capaz de todo.',
      'Se que la pereza siempre te gana y que necesitas más disciplina siempre la has necesitado, pero sabes muy bien que estudiando y poniendo esfuerzo sos capaz. Acordate de como necesitabas 15 puntos en un examen de química y estudiaste apenas el dia anterior y solo con eso lograste sacar 18. Aprende que no vas a tener todo tan fácil y siempre va a haber gente mejor que vos, y tenes ejemplos de eso pero preguntate realmente importa eso?',
      'Solo aprende a ser mejor y acepta que hay cosas que no se te dan tan bien, pero nunca te salgas del camino que queres seguir. Te da miedo fracasar y eso es lo más normal, aprende de la gente que te aconseja y si ese chico fan de los videojuegos y de la astronomía puede crear grandes cosas, pero proponete mejorar siempre, si ya se que te cuesta aveces mate y te va a costar más en ingeniería, lo sabemos y por eso estudia, esforzate y pensa si todo te sale bien que tán feliz serías, cumplí tus sueños pero primero para eso es el esfuerzo ahora.'
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

