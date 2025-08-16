document.querySelectorAll(".descricao-agendamento a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // evita o comportamento padrão
    let elemento = link.parentNode; // começa pelo pai direto do link
    if (elemento && elemento.classList.contains("descricao-agendamento")) {
      elemento.remove(); // remove a div do agendamento
    }
  });
});
