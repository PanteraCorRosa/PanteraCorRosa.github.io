const obras = [
  {
    id: 1,
    titulo: "Obra Exemplo",
    descricao: "Uma história intensa cheia de mistério.",
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
