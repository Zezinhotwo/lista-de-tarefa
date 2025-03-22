import { getTasks, gravarTarefas } from "./localStorage";
import { DomActions } from "./domAcoes";
import Task from "./Task";
export default class CheckTask {
    constructor() {
        this.init();
    }

    init() {
        this.isChecked();
    }

    isChecked() {
        document.body.addEventListener("change", (event) => {
            const task = event.target.closest(".task"); // Encontra a tarefa mais próxima

            if (!task) return; // Se não houver .task, sai da função

            const checkbox = task.querySelector(".checkbox"); // Pega o checkbox dentro da task
            const $title = task.querySelector(".title")?.textContent.trim();
            const checkTask = new DomActions();
                const tarefas = getTasks(); // Acessa as tarefas
            const Jtarefa = tarefas.filter(task => task.title === $title);

            const nome = Jtarefa[0].title;
            const descricao = Jtarefa[0].descricao;
            const nivel = Jtarefa[0].level;
            const dataInicio = Jtarefa[0].startDate;
            const dataFim = Jtarefa[0].endDate;
            const isChecked = true;//Jtarefa[0].isChecked;

            const tarefa = new Task(
                nome,
                descricao,
                nivel,
                dataFim,
                dataInicio,
                isChecked
            );

            if (checkbox) {
                checkTask.deletarTarefaDom(Number(task.dataset.index)); // Deleta a tarefa do DOM
                gravarTarefas(tarefa); // Grava a tarefa no localStorage
                // console.log("Checkbox está marcado?", checkbox.checked);
            }
        });
    }

    filterChecked() {
        const tarefas = getTasks(); // Acessa as tarefas
        const Jtarefa = tarefas.filter(task => task.isChecked === true || task.isChecked === "true");
        // const Jtarefa = tarefas.filter(task => Boolean(task.isChecked));
        // console.log("Tarefas antes da marcação:", getTasks());
        return Jtarefa;
    }

}