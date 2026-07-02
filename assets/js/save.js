function coletarDados() {

  const dados = {
    identificacao: {
      tutor: document.getElementById("tutor").value,
      tutorado: document.getElementById("tutorado").value,
      data: document.getElementById("data").value,
      area: document.getElementById("area").value,
      atividade: document.getElementById("atividade").value
    },

    seguranca: {
      tipo: document.getElementById("tipo").value,
      risco: document.getElementById("risco").value,
      pt: document.getElementById("pt").value,
      epis: document.getElementById("epis").value,
      procedimento: document.getElementById("procedimento").value,
      risco_desc: document.getElementById("risco_desc").value
    },

    avaliacao: coletarAvaliacao(),

    tutoria: {
      tema: document.getElementById("tema").value,
      entendimento: document.getElementById("entendimento").value,
      observacoes: document.getElementById("obs").value
    }
  };

  return dados;
}function coletarAvaliacao() {
  const selects = document.querySelectorAll("#avaliacao-container select");

  const respostas = [];

  selects.forEach(sel => {
    respostas.push({
      grupo: sel.dataset.group,
      item: sel.dataset.item,
      valor: sel.value
    });
  });

  return respostas;
}
