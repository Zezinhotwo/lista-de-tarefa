import { createDom } from "./DomGetData.js";
import _, { remove } from "lodash";
// nav
const listTask = document.querySelector(".listTask");
import { ontem, allTaks, hoje } from "./NewTask.js";
import { deleteTaskByIndex, renderTasks } from "./localStorage.js";

$(".nav").on("click", (event) => {
  if ($(event.target) && $(event.target).hasClass("item-nav")) {
    switch ($(event.target).text()) {
      case "Adicionar Tarefa":
        $(".form").toggle("fast");
        break;
      case "Ontem":
        $(".listTask")
          .children()
          .hide("fast", function () {
            $(".listTask").empty();
            $(".listTask").append(ontem());
            $(".listTask").children().show("fast");
          });
        break;
      case "All Task":
        $(".listTask")
          .children()
          .hide("fast", () => {
            $(".listTask").empty();
            $(".listTask").append(allTaks());
            $(".listTask").children().show("fast");
          });
        break;
      case "Hoje":
        $(".listTask")
          .children()
          .hide("fast", () => {
            $(".listTask").empty();
            $(".listTask").append(hoje());
            $(".listTask").children().show("fast");
          });
        break;
      default:
        break;
    }
  }
});

$(".addTask").on("click", (event) => {
  event.preventDefault();
  $(".form").toggle("fast");
});

$(document).on("click", ".delete", function (event) {
  const index = $(this).data("index");
  deleteTaskByIndex(index);
  $(this).closest(".task").remove();
});
