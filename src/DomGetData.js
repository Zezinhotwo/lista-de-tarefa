// Formulario
$(document).ready(function () {
  $(".form").on("submit", (event) => {
    event.preventDefault();
    // console.log("DADOS DO FRONT", DomGetData());
    DomGetData();
    $(".form").hide();
    // alert("Nome: " + nome + " Nivel: " + nivel + " Prazo: " + prazo+" Descrica: "+ descricao);
  });
});
import Task from "./NewTask.js";
import { salvaJSON } from "./localStorage.js";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

const diaAtual = new Date();

export default function DomGetData() {
  const nome = $("#nome").val();
  const nivel = $("input[name='nivel']:checked").val();
  const prazo = parseInt($("#dias").val(), 10); // Convertendo string para número
  const descricao = $("#descricao").val();

  const tarefa = {
    nome: nome,
    nivel: nivel,
    prazo: format(addDays(diaAtual, prazo), "EEEE dd/MM/yyyy", { locale: ptBR }),
    init: format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR }),
    descricao: descricao,
  };

  if (!nome || !nivel || !prazo || !descricao) {
    alert("Todos os campos são obrigatórios.");
    return false;
  }

  const DomJson = new Task(
    tarefa.nome,
    tarefa.descricao,
    tarefa.nivel,
    tarefa.init,
    tarefa.prazo
  );

  salvaJSON(DomJson);
  return { tarefa };
}