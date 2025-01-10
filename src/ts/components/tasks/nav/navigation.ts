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

        const bntDeleteTask:
            HTMLButtonElement | null
            = document.querySelector("#addTask");

        const task:
            HTMLDivElement | null
            = document.querySelector(".listTask");
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
                    taskList.innerHTML = generateTasksHtml(this.filterTasksByDate());
                }
                break;
            case "All Task":
                if (taskList) {
                    taskList.innerHTML = generateTasksHtml(this.getTasks());
                }
                break;
        }
    }

    private getTasks(): Task[] {
        const task = localStorage.getItem("Tarefas");
        try {
            const parsed = task ? JSON.parse(task) : [];

            if (Array.isArray(parsed) && parsed.every((item) =>
                typeof item === 'object' &&
                'title' in item && 'descricao' in item && 'level' in item)) {
                return parsed;
            }

            return [];

        } catch (error) {

            console.log("Erro ao parsear os dados de Tarefas:", error)
            return [];
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

