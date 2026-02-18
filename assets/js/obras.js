const obras = [
  {
    id: 1,
    titulo: "Nasci como a filha de uma Concubina de baixo escalão",
    descricao: "Acompanhe a história de mistério e ação do ladrão mais elegante.",
  },
  {
    id: 2,
    titulo: "Bad guy",
    descricao: "Segredos, intrigas e romance em uma cidade envolta em sombras.",
  },
  {
    id: 3,
    titulo: "Lendas do Dragão",
    descricao: "Aventuras épicas com dragões, guerreiros e batalhas lendárias.",
  }
];

const container = document.querySelector(".container");

obras.forEach(obra => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${obra.titulo}</h3>
    <p>${obra.descricao}</p>
    <a href="#" class="botao">Ler Agora</a>
  `;

  container.appendChild(card);
});
