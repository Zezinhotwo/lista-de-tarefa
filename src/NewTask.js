class Task {
  constructor(title, descricao, level, InitiDate, EndDate) {
    this.title = title;
    this.descricao = descricao;
    this.level = level;
    this.InitiDate = InitiDate;
    this.EndDate = EndDate;
  }
  get() {
    return `${this.title}, ${this.descricao}, ${this.level}, ${this.InitiDate}, ${this.EndDate}`;
  }
}

import { deleteTask, salvaJSON,getJSON, renderTasks } from "./localStorage.js";
const listTask = document.querySelector(".listTask");

const task = new Task("Passear", "Ir na praça", "Medio", "9:AM", "10:AM");
const task2 = new Task("Passear2", "Ir na praça2", "Medio", "9:AM", "10:AM");
const task3 = new Task("Passear3", "Ir na praça", "Medio", "9:AM", "10:AM");
const task4 = new Task("Passear5", "Ir na praça2", "Medio", "9:AM", "10:AM");
// Salva as tarefas no localStorage
salvaJSON(task);
salvaJSON(task2);
salvaJSON(task3);
salvaJSON(task4);
// deleteTask(task2);
const tasks = getJSON();

listTask.innerHTML=renderTasks(tasks);

// document.body.innerHTML = renderTasks(tasks);
