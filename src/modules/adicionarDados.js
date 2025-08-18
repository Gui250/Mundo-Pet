const nomeTutor = document.getElementById("nomeTutor");
const morning = document.getElementById("morning");
const afternoon = document.getElementById("afternoon");
const night = document.getElementById("night");
const nomePet = document.getElementById("nomePet");
const telefone = document.getElementById("telefone");
const descricaoServico = document.getElementById("descricaoServico");
const data = document.getElementById("data");
const horario = document.getElementById("horario");
const agendarBtn = document.getElementById("agendar");

let horarios = [];

function filtro(e) {
  e.preventDefault();

  let valorHorario = horario.value;
  let valorTutor = nomeTutor.value;
  let valorPet = nomePet.value;
  let valorDescricaoServico = descricaoServico.value;
  let valorData = data.value;

  if (
    valorHorario === "" ||
    valorTutor === "" ||
    valorPet === "" ||
    valorDescricaoServico === "" ||
    valorData === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  let agendamento = {
    horario: valorHorario,
    tutor: valorTutor,
    pet: valorPet,
    descricao: valorDescricaoServico,
    data: valorData,
  };

  horarios.push(agendamento);
  console.log(horarios);

  horarios.filter((item) => {
    if(item.horario >= "09:00" && item.horario <= "12:00") {
      const div = document.createElement("div");
      div.classList.add("descricao-agendamento");
      div.innerHTML = `
      <p>${item.horario}</p>
      <p>${item.tutor}<span>/ ${item.tutor}</span></p>
      <p><span>${item.descricao}</span></p>
      <a href="#">Remover Agendamento</a>
      `
      morning.appendChild(div);
    }

    if(item.horario >= "13:00" && item.horario <= "18:00" ) {
      const div = document.createElement("div");
      div.classList.add("descricao-agendamento");
      div.innerHTML = `
      <p>${item.horario}</p>
      <p>${item.tutor}<span>/ ${item.tutor}</span></p>
      <p><span>${item.descricao}</span></p>
      <a href="#">Remover Agendamento</a>
      `
      afternoon.appendChild(div);

    }

    if(item.horario >= "19:00" && item.horario <= "23:00" ) {
      const div = document.createElement("div");
      div.classList.add("descricao-agendamento");
      div.innerHTML = `
      <p>${item.horario}</p>
      <p>${item.tutor}<span>/ ${item.tutor}</span></p>
      <p><span>${item.descricao}</span></p>
      <a href="#">Remover Agendamento</a>
      `
      night.appendChild(div);
    }

  })
}

agendarBtn.addEventListener("click", filtro);
