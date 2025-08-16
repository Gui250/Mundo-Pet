const dialogContainer = document.getElementById("dialog");
const novoAgendamentoButton = document.getElementById("novo-agendamento");

function novoAgendamento(e) {
    e.preventDefault();
    dialogContainer.style.display = "flex";
}




novoAgendamentoButton.addEventListener("click", novoAgendamento);
