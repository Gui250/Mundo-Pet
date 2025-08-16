const descricaoAgendamentoMorning = document.getElementById("descricao-agendamento-morning");
const descricaoAgendamentoAfternoon = document.getElementById("descricao-agendamento-afternoon");
const descricaoAgendamentoNight = document.getElementById("descricao-agendamento-night");


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




    horarios.push(valorHorario);

    let horariosFiltrados = horarios.filter((horario) => { 
        if(horario.value >= "09:00" && horario.value <= "12:00") {
            const dados = [valorTutor, valorPet, valorDescricaoServico, valorData, valorHorario];

            for(let i = 0 ; i <= dados.length; i++) { 
                
            }

        }
    })
}