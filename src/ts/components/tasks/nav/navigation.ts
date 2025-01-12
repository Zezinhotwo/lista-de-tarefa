//*********-----Timing lib
import { format, subDays, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
// *********

import { generateTasksHtml } from "../getTask/taks";

interface Task {
    title: string;
    descricao: string;
    level: number;
    startDate: string;
    endDate: string;
}

class Navigation {

    constructor() {
        this.ini();
    }
    private ini() {
        this.configEvents();
        this.renderHTML();
    }

    private configEvents(): void {

        const navigation: HTMLElement | null = document.querySelector(".nav");
        navigation?.addEventListener("click", (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target && target.classList.contains("item-nav")) {
                this.navOptions(target.textContent || "");
            }
        });

        const bntAddTask:
            HTMLButtonElement | null
            = document.querySelector("section .addTask");

        // ---------------Hide Form--------------- // 
        const bntHideFrom:
            HTMLButtonElement | null
            = document.querySelector("#addTask");

        bntHideFrom?.addEventListener("click",
            (event) => {
                event.preventDefault();
                const formDom = document.querySelector(".form");

                formDom ? formDom.classList.toggle("hide")
                    : new Error("Nao foi possivel ocultar Formulario ");
            });

        //  take the target clicked on the mouse and delete
        document.addEventListener("click", (event) => {
            const target = event.target as HTMLElement;

            if (target && target.classList.contains("delete")) {
                const index = target.dataset.index
                    ? parseInt(target.dataset.index, 10) : -1;

                if (!isNaN(index)) {
                    this.removeTask(index);
                } else {
                    console.error("O índice não é um número válido.");
                }
            }
        });
    }

    private navOptions(option: string): void {
        const taskList: HTMLDivElement | null = document.querySelector(".listTask");
        switch (option) {
            case "Adicionar Tarefa":
                const form: HTMLElement | null = document.querySelector(".form");
                form?.classList.toggle("hide");
                if (taskList) {
                    taskList.innerHTML = generateTasksHtml(this.getTasks());
                }
                break;
            case "Hoje":
                // Certifique-se de que `filtraTarefaPelaData` está implementado
                if (taskList) {
                    taskList.innerHTML = generateTasksHtml(this.filterTasksByDate(option));
                }
                break;
            case "All Task":
                if (taskList) {
                    taskList.innerHTML = generateTasksHtml(this.getTasks());
                }
                break;
        }
    }

    private filterTasksByDate(option: string): Task[] {
        const getStorageTask: Task[] = this.getTasks();

        const today = format(new Date(),
            "EEEE dd/MM/yyyy",
            { locale: ptBR });

        const lastDay = format(subDays(new Date(), 1),
            "EEEE dd/MM/yyyy",
            { locale: ptBR });

        if (option === "Hoje")
            return getStorageTask
                .filter(item => item.startDate === today);
        else if (option === "Ontem")
            return getStorageTask
                .filter(item => item.startDate === lastDay);
        else
            return getStorageTask;

    }

    private getTasks(): Task[] {
        const task = localStorage.getItem("Tarefas");
        try {
            const parsed = task ? JSON.parse(task) : [];

            if (Array.isArray(parsed) && parsed.every((item) =>
                typeof item === 'object'
                && 'title' in item
                && 'descricao' in item
                && 'level' in item)) {
                return parsed;
            }
            return [];
        } catch (error) {
            console.log("Erro ao parsear os dados de Tarefas:", error)
            return [];
        }
    }
    private removeTask(index: number): void {
        const tasks = localStorage.getItem("Tarefas");
        try {
            const parsed = tasks ? JSON.parse(tasks) : [];
            if (Array.isArray(parsed) && parsed.every((item) =>
                typeof item === 'object'
                && 'title' in item
                && 'descricao' in item
                && 'level' in item)) {

                const updatedTasks = parsed.
                    filter((task, i) => i !== index);
                localStorage.setItem("Tarefas",
                    JSON.stringify(updatedTasks));
                console.log("Tarefa removida com sucesso");
            }
        } catch (error) {
            console.log("Erro ao parsear os dados de Tarefas:", error)
        }
    }

    private renderHTML(): void {
        const tasks = this.getTasks();
        const render: HTMLDivElement | null
            = document.querySelector(".listTask");
        if (render) {
            render.innerHTML = generateTasksHtml(tasks);
        }
    }

}

