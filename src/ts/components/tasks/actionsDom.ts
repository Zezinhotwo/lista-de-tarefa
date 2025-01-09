class Navigation{

    constructor() {

    }

    private configEvents(): void {
        const navegation:
            HTMLElement | null
            = document.querySelector(".nav");
        navegation?.addEventListener("click",
            (event: MouseEvent) => {
                const target = event.target as HTMLElement;
                if (target && target.classList.contains("item-nav")) {
                    this.navOpitions(target.textContent);
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
    private navOpitions(opition: string): void {
        const stayLists: HTMLDivElement | null
            = document.querySelector(".listTask");
        switch (opition) {
            case "Adicionar Tarefa":
                const formDom: HTMLElement | null = document.querySelector(".form");
                formDom?.classList.toggle(".hide");
                stayLists?.innerHTML = remderTasks(getTasks());
                break;
            case "Hoje":
                stayLists?.innerHTML = renderTasks(filtraTarefaPelaData(option));
                break;
            case "All Task":
                stayLists.innerHTML = renderTasks(getTasks());
                break;
        }

    }

}

