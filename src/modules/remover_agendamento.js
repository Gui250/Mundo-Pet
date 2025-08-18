// Em vez de adicionar listeners a elementos específicos,
// adicione ao documento e use delegação de eventos
document.addEventListener("click", (event) => {
  // Verifica se o elemento clicado é um link dentro de .descricao-agendamento
  if (event.target.matches(".descricao-agendamento a")) {
    event.preventDefault(); // evita o comportamento padrão
    let elemento = event.target.parentNode; // começa pelo pai direto do link
    if (elemento && elemento.classList.contains("descricao-agendamento")) {
      elemento.remove(); // remove a div do agendamento
    }
  }
});
