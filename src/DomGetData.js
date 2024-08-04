// Formulario
$(document).ready(function () {
  $(".form").on("submit", (event) => {
    event.preventDefault();
    const listTask = document.querySelector(".listTask");
    listTask.innerHTML = renderTasks(DomGetData());
    $(".form").hide();
  });
});
import { error } from "jquery";
import Task from "./NewTask.js";
import { getJSON, salvaJSON, renderTasks } from "./localStorage.js";
import { addDays, format } from "date-fns";
import { ptBR, ta } from "date-fns/locale";

const diaAtual = new Date();

function getFomr() {
  const nome = $("#nome").val();
  const nivel = $("input[name='nivel']:checked").val();
  const prazo = parseInt($("#dias").val(), 10); // Convertendo string para número
  const descricao = $("#descricao").val();

  const tarefa = {
    nome: nome,
    nivel: nivel,
    prazo: format(addDays(diaAtual, prazo), "EEEE dd/MM/yyyy", {
      locale: ptBR,
    }),
    init: format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR }),
    descricao: descricao,
  };
  return tarefa;
}
export default function DomGetData() {
  const tarefa = getFomr();
  const DomJson = new Task(
    tarefa.nome,
    tarefa.descricao,
    tarefa.nivel,
    tarefa.init,
    tarefa.prazo
  );
  salvaJSON(DomJson);
  const DomList = getJSON();
  return DomList;
}
