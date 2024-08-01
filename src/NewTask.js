export default class Task {
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
// import DomGetData from "./DomGetData.js";
import { deleteTask, salvaJSON, getJSON, renderTasks } from "./localStorage.js";
const listTask = document.querySelector(".listTask");
import { addDays, subDays, format, closestTo } from "date-fns";
import { ptBR } from "date-fns/locale";
// LIB
const diaAtual = new Date();
const task = new Task(
  "Passear",
  "Ir na praça",
  "Medio",
  format(subDays(diaAtual, 1), "EEEE dd/MM/yyyy", { locale: ptBR }),
  format(addDays(diaAtual, 1), "EEEE dd/MM/yyyy", { locale: ptBR })
);
const task2 = new Task(
  "Passear2",
  "Ir na praça2",
  "Medio",
  format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR }),
  format(addDays(diaAtual, 4), "EEEE dd/MM/yyyy", { locale: ptBR })
);
const task3 = new Task(
  "Passear3",
  "Ir na praça",
  "Medio",
  format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR }),
  format(addDays(diaAtual, 0), "EEEE dd/MM/yyyy", { locale: ptBR })
);
const task4 = new Task(
  "Passear5",
  "Ir na praça2",
  "Medio",
  format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR }),
  format(addDays(diaAtual, 10), "EEEE dd/MM/yyyy", { locale: ptBR })
);
// Salva as tarefas no localStorage
salvaJSON(task);
salvaJSON(task2);
salvaJSON(task3);
salvaJSON(task4);
// deleteTask(task2);
const tasks = getJSON();

listTask.innerHTML = renderTasks(tasks);

// document.body.innerHTML = renderTasks(tasks);
export function allTaks() {
  return renderTasks(tasks);
}
export function hoje() {
  const modu = getJSON();
  const breve = modu.filter(
    (index) =>
      index.InitiDate == format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR })
  );

  return renderTasks(breve);
}
export function ontem() {
  const modu = getJSON();
  const breve = modu.filter(
    (index) =>
      index.InitiDate !== format(diaAtual, "EEEE dd/MM/yyyy", { locale: ptBR })
  );

  return renderTasks(breve);
}
// console.log(hoje())
