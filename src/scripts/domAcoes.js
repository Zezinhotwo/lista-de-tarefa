//domActions.js
import { deletarTarefasPeloIndex, getTasks, renderTasks } from "./localStorage.js";
import { filtraTarefaPelaData } from "./datas.js";
import CheckTask from "./check-task.js";

export class DomActions {
  constructor() {
    this.init();
  }

  init() {
    this.configDeEventos();
    this.renderTarefa();
  }

  configDeEventos() {
    document.querySelector(".nav").addEventListener("click", (event) => {
      if (event.target && event.target.classList.contains("item-nav")) {
        this.clickNav(event.target.textContent);
      }
    });

    document.querySelector("section .addTask").addEventListener("click", () => {
      document.querySelector(".form").classList.remove("hide");
    });
    // ---------------Ocultar Formulario--------------- // 
    document.querySelector("#addTask").addEventListener("click", (event) => {
      event.preventDefault()
      document.querySelector(".form").classList.toggle("hide");
    });

    document.addEventListener("click", (event) => {
      if (event.target && event.target.classList.contains("delete")) {
        this.deletarTarefaDom(event.target.dataset.index);
      }
    });
  }

  clickNav(option) {
    const listTask = document.querySelector(".listTask");
    listTask.innerHTML = "";

    switch (option) {
      case "Adicionar Tarefa":
        listTask.innerHTML = renderTasks(getTasks());
        break;
      case "Feitas":
        const feitas = new CheckTask();
        listTask.innerHTML = renderTasks(feitas.filterChecked());
        break;
      case "Hoje":
        listTask.innerHTML = renderTasks(filtraTarefaPelaData(option));
        break;
      case "All Task":
        listTask.innerHTML = renderTasks(getTasks());
        break;
      // default:
      // listTask.innerHTML = renderTasks(filtraTarefaPelaData(option));
      // break;

    }
  }

  deletarTarefaDom(index) {
    deletarTarefasPeloIndex(Number(index));
    this.renderTarefa();
  }
  renderTarefa() {
    const tasks = getTasks();
    document.querySelector(".listTask").innerHTML = renderTasks(tasks); // Renderize-as no DOM
  }
}