const botao = document.getElementById('btn-eco');
const textoDica = document.getElementById('dica-texto');

// Lista de dicas sobre meio ambiente e agrofloresta
const dicas = [
  "Consorciar plantas: Plantar milho, feijão e abóbora juntos ajuda o solo e espanta pragas naturalmente!",
  "A cobertura morta (folhas secas no solo) protege a terra do sol e economiza muita água de rega.",
  "Árvores nativas atraem pássaros e insetos polinizadores que protegem as plantações de alimentos.",
  "Na agrofloresta, imitamos a própria natureza: nenhuma folha caída é lixo, tudo vira adubo!",
  "Plante árvores! Elas são as melhores engenheiras do clima e purificadoras do nosso ar."
];

botao.addEventListener('click', () => {
  // Sorteia uma dica aleatória da lista
  const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  
  // Mostra o texto na tela
  textoDica.textContent = dicaAleatoria;
  textoDica.classList.remove('hidden');
});
