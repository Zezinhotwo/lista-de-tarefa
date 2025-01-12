"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
const taks_1 = require("../getTask/taks");
class Navigation {
    constructor() {
        this.ini();
    }
    ini() {
        this.configEvents();
        this.renderHTML();
    }
    configEvents() {
        const navigation = document.querySelector(".nav");
        navigation === null || navigation === void 0 ? void 0 : navigation.addEventListener("click", (event) => {
            const target = event.target;
            if (target && target.classList.contains("item-nav")) {
                this.navOptions(target.textContent || "");
            }
        });
        const bntAddTask = document.querySelector("section .addTask");
        const bntHideFrom = document.querySelector("#addTask");
        bntHideFrom === null || bntHideFrom === void 0 ? void 0 : bntHideFrom.addEventListener("click", (event) => {
            event.preventDefault();
            const formDom = document.querySelector(".form");
            formDom ? formDom.classList.toggle("hide")
                : new Error("Nao foi possivel ocultar Formulario ");
        });
        document.addEventListener("click", (event) => {
            const target = event.target;
            if (target && target.classList.contains("delete")) {
                const index = target.dataset.index
                    ? parseInt(target.dataset.index, 10) : -1;
                if (!isNaN(index)) {
                    this.removeTask(index);
                }
                else {
                    console.error("O índice não é um número válido.");
                }
            }
        });
    }
    navOptions(option) {
        const taskList = document.querySelector(".listTask");
        switch (option) {
            case "Adicionar Tarefa":
                const form = document.querySelector(".form");
                form === null || form === void 0 ? void 0 : form.classList.toggle("hide");
                if (taskList) {
                    taskList.innerHTML = (0, taks_1.generateTasksHtml)(this.getTasks());
                }
                break;
            case "Hoje":
                if (taskList) {
                    taskList.innerHTML = (0, taks_1.generateTasksHtml)(this.filterTasksByDate(option));
                }
                break;
            case "All Task":
                if (taskList) {
                    taskList.innerHTML = (0, taks_1.generateTasksHtml)(this.getTasks());
                }
                break;
        }
    }
    filterTasksByDate(option) {
        const getStorageTask = this.getTasks();
        const today = (0, date_fns_1.format)(new Date(), "EEEE dd/MM/yyyy", { locale: locale_1.ptBR });
        const lastDay = (0, date_fns_1.format)((0, date_fns_1.subDays)(new Date(), 1), "EEEE dd/MM/yyyy", { locale: locale_1.ptBR });
        if (option === "Hoje")
            return getStorageTask
                .filter(item => item.startDate === today);
        else if (option === "Ontem")
            return getStorageTask
                .filter(item => item.startDate === lastDay);
        else
            return getStorageTask;
    }
    getTasks() {
        const task = localStorage.getItem("Tarefas");
        try {
            const parsed = task ? JSON.parse(task) : [];
            if (Array.isArray(parsed) && parsed.every((item) => typeof item === 'object'
                && 'title' in item
                && 'descricao' in item
                && 'level' in item)) {
                return parsed;
            }
            return [];
        }
        catch (error) {
            console.log("Erro ao parsear os dados de Tarefas:", error);
            return [];
        }
    }
    removeTask(index) {
        const tasks = localStorage.getItem("Tarefas");
        try {
            const parsed = tasks ? JSON.parse(tasks) : [];
            if (Array.isArray(parsed) && parsed.every((item) => typeof item === 'object'
                && 'title' in item
                && 'descricao' in item
                && 'level' in item)) {
                const updatedTasks = parsed.
                    filter((task, i) => i !== index);
                localStorage.setItem("Tarefas", JSON.stringify(updatedTasks));
                console.log("Tarefa removida com sucesso");
            }
        }
        catch (error) {
            console.log("Erro ao parsear os dados de Tarefas:", error);
        }
    }
    renderHTML() {
        const tasks = this.getTasks();
        const render = document.querySelector(".listTask");
        if (render) {
            render.innerHTML = (0, taks_1.generateTasksHtml)(tasks);
        }
    }
}
