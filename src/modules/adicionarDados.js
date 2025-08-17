const nomeTutor = document.getElementById("nomeTutor");
const nomePet = document.getElementById("nomePet");
const telefone = document.getElementById("telefone");
const descricaoServico = document.getElementById("descricaoServico");
const data = document.getElementById("data");
const horario = document.getElementById("horario");
let horarios = [];

function filtro() {
  let valorHorario = horario.value;
  let valorTutor = nomeTutor.value;
  let valorPet = nomePet.value;
  let valorDescricaoServico = descricaoServico.value;
  let valorData = data.value;
}
