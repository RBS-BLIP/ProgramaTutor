let avaliacaoData = [];

fetch("assets/data/avaliacao.json")
  .then(res => res.json())
  .then(data => {
    avaliacaoData = data;
    renderAvaliacao();
  });

function renderAvaliacao() {
  const container = document.getElementById("avaliacao-container");

  avaliacaoData.forEach((grupo, gIndex) => {

    const titulo = document.createElement("h3");
    titulo.innerText = grupo.categoria;
    container.appendChild(titulo);

    grupo.itens.forEach((item, iIndex) => {

      const div = document.createElement("div");
      div.className = "item-avaliacao";

      div.innerHTML = `
        <label>${item}</label>
        <select data-group="${gIndex}" data-item="${iIndex}">
          <option value="">--</option>
          <option value="1">1 - Não atende</option>
          <option value="2">2 - Parcial</option>
          <option value="3">3 - Atende</option>
          <option value="NA">N/A</option>
        </select>
      `;

      container.appendChild(div);
    });
  });
}
