// controllers/formController.js
import Task from "./Task.js";
import { gravarTarefas, getTasks, renderTasks } from "./localStorage.js";
import { format, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

export class FormController {
  constructor() {
    this.diaAtual = new Date();
    this.configFromEnviar();
  }

  configFromEnviar() {
    document.querySelector(".form").addEventListener("submit", (event) => {
      event.preventDefault();
      this.addTask();
    });
  }

  addTask() {
    const nome = document.querySelector("#nome").value;
    const nivel = document.querySelector("input[name='nivel']:checked").value;
    const prazo = parseInt(document.querySelector("#dias").value, 10);
    const descricao = document.querySelector("#descricao").value;

    const tarefa = new Task(
      nome,
      descricao,
      nivel,
      format(this.diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR }),
      format(addDays(this.diaAtual, prazo), "EEEE dd/MM/yyyy", { locale: ptBR })
    );

    gravarTarefas(tarefa);
    document.querySelector(".form").classList.add("hide");
    // Atualizar a lista de tarefas no DOM
    this.atualizaTarefaDom();
  }

  atualizaTarefaDom() {
    const tasks = getTasks(); // Obtenha as tarefas atualizadas
    document.querySelector(".listTask").innerHTML = renderTasks(tasks); // Renderize-as no DOM
  }
}
