"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//*********-----Timing lib
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
// *********
var taks_1 = require("../getTask/taks");
var Navigation = /** @class */ (function () {
    function Navigation() {
        this.ini();
    }
    Navigation.prototype.ini = function () {
        this.configEvents();
        this.renderHTML();
    };
    Navigation.prototype.configEvents = function () {
        var _this = this;
        var navigation = document.querySelector(".nav");
        navigation === null || navigation === void 0 ? void 0 : navigation.addEventListener("click", function (event) {
            var target = event.target;
            if (target && target.classList.contains("item-nav")) {
                _this.navOptions(target.textContent || "");
            }
        });
        var bntAddTask = document.querySelector("section .addTask");
        // ---------------Hide Form--------------- // 
        var bntHideFrom = document.querySelector("#addTask");
        bntHideFrom === null || bntHideFrom === void 0 ? void 0 : bntHideFrom.addEventListener("click", function (event) {
            event.preventDefault();
            var formDom = document.querySelector(".form");
            formDom ? formDom.classList.toggle("hide")
                : new Error("Nao foi possivel ocultar Formulario ");
        });
        //  take the target clicked on the mouse and delete
        document.addEventListener("click", function (event) {
            var target = event.target;
            if (target && target.classList.contains("delete")) {
                var index = target.dataset.index
                    ? parseInt(target.dataset.index, 10) : -1;
                if (!isNaN(index)) {
                    _this.removeTask(index);
                }
                else {
                    console.error("O índice não é um número válido.");
                }
            }
        });
    };
    Navigation.prototype.navOptions = function (option) {
        var taskList = document.querySelector(".listTask");
        switch (option) {
            case "Adicionar Tarefa":
                var form = document.querySelector(".form");
                form === null || form === void 0 ? void 0 : form.classList.toggle("hide");
                if (taskList) {
                    taskList.innerHTML = (0, taks_1.generateTasksHtml)(this.getTasks());
                }
                break;
            case "Hoje":
                // Certifique-se de que `filtraTarefaPelaData` está implementado
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
    };
    Navigation.prototype.filterTasksByDate = function (option) {
        var getStorageTask = this.getTasks();
        var today = (0, date_fns_1.format)(new Date(), "EEEE dd/MM/yyyy", { locale: locale_1.ptBR });
        var lastDay = (0, date_fns_1.format)((0, date_fns_1.subDays)(new Date(), 1), "EEEE dd/MM/yyyy", { locale: locale_1.ptBR });
        if (option === "Hoje")
            return getStorageTask
                .filter(function (item) { return item.startDate === today; });
        else if (option === "Ontem")
            return getStorageTask
                .filter(function (item) { return item.startDate === lastDay; });
        else
            return getStorageTask;
    };
    Navigation.prototype.getTasks = function () {
        var task = localStorage.getItem("Tarefas");
        try {
            var parsed = task ? JSON.parse(task) : [];
            if (Array.isArray(parsed) && parsed.every(function (item) {
                return typeof item === 'object'
                    && 'title' in item
                    && 'descricao' in item
                    && 'level' in item;
            })) {
                return parsed;
            }
            return [];
        }
        catch (error) {
            console.log("Erro ao parsear os dados de Tarefas:", error);
            return [];
        }
    };
    Navigation.prototype.removeTask = function (index) {
        var tasks = localStorage.getItem("Tarefas");
        try {
            var parsed = tasks ? JSON.parse(tasks) : [];
            if (Array.isArray(parsed) && parsed.every(function (item) {
                return typeof item === 'object'
                    && 'title' in item
                    && 'descricao' in item
                    && 'level' in item;
            })) {
                var updatedTasks = parsed.
                    filter(function (task, i) { return i !== index; });
                localStorage.setItem("Tarefas", JSON.stringify(updatedTasks));
                console.log("Tarefa removida com sucesso");
            }
        }
        catch (error) {
            console.log("Erro ao parsear os dados de Tarefas:", error);
        }
    };
    Navigation.prototype.renderHTML = function () {
        var tasks = this.getTasks();
        var render = document.querySelector(".listTask");
        if (render) {
            render.innerHTML = (0, taks_1.generateTasksHtml)(tasks);
        }
    };
    return Navigation;
}());
