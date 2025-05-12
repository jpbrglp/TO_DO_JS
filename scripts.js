contador = 0;
function add() {
  contador++;
  const tarefaId = "TarefaSalva_" + contador;
  const input = document.getElementById("input").value;
  const container = document.getElementById("container");
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("h3");
  const texto = document.createElement("p");
  const concluir = document.createElement("button");
  const atualizar = document.createElement("button");
  concluir.textContent = "Concluir";
  atualizar.textContent = "Atualizar";
  if (input === "") {
    alert("Por favor, insira uma tarefa");
    return;
  } else {
    const tarefa = localStorage.getItem(tarefaId);
    texto.textContent = input;
    localStorage.setItem(tarefaId, input);
    alert("Tarefa salva com sucesso!");

    concluir.onclick = () => {
      container.removeChild(card);
      localStorage.removeItem(tarefaId);
    };
    atualizar.onclick = () => {
      const novoTexto = prompt("Atualize sua Tarefa", texto.textContent);
      if (novoTexto) {
        texto.textContent = novoTexto;
        localStorage.setItem(tarefaId, novoTexto);
      }
    };
    title.innerHTML = "Title" + " " + contador;
    card.appendChild(title);
    card.appendChild(texto);
    card.appendChild(concluir);
    card.appendChild(atualizar);
    container.appendChild(card);
  }
}
window.onload = function () {
  let maior = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);
    if (chave.startsWith("TarefaSalva_")) {
      const texto2 = localStorage.getItem(chave);
      const container = document.getElementById("container");
      const card = document.createElement("div");
      card.classList.add("card");
      const title = document.createElement("h3");
      const textoElement = document.createElement("p");
      const concluir = document.createElement("button");
      const atualizar = document.createElement("button");
      title.innerHTML = "Title " + chave.split("_")[1];
      textoElement.textContent = texto2;
      concluir.textContent = "Concluir";
      atualizar.textContent = "Atualizar";
      concluir.onclick = () => {
        container.removeChild(card);
        localStorage.removeItem(chave);
      };
      atualizar.onclick = () => {
        const novoTexto = prompt(
          "Atualize sua Tarefa",
          textoElement.textContent
        );
        if (novoTexto) {
          textoElement.textContent = novoTexto;
          localStorage.setItem(chave, novoTexto);
        }
      };
      card.appendChild(title);
      card.appendChild(textoElement);
      card.appendChild(concluir);
      card.appendChild(atualizar);
      container.appendChild(card);
    }
  }
  contador = maior;
};
