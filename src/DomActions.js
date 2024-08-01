import { createDom } from "./DomGetData.js";
import _ from "lodash";
// nav
const listTask = document.querySelector(".listTask");
import { ontem, allTaks,hoje } from "./NewTask.js";
$(".nav").on("click", (event) => {
  if ($(event.target) && $(event.target.classList.contains("item-nav"))) {
    // alert("clicado " + $(event.target).text());
    switch ($(event.target).text()) {
      case "Adicionar Tarefa":
        $(".form").toggle("fast");
        break;
      case "Ontem":
        $(".listTask")
          .children()
          .hide("fast", function () {
            // Após esconder todos os filhos, esvazia o container
            $(".listTask").empty();
            // Adiciona o valor retornado pela função hoje()
            $(".listTask").append(ontem());
            // Mostra os novos elementos (opcional)
            $(".listTask").children().show("fast");
          });
        break;
      case "All Task":
        $(".listTask")
          .children()
          .hide("fast", () => {
            $(".listTask").empty();
            $(".listTask").append(allTaks());
            $(".listTask").children().show("fast")
          });
        break;
        case "Hoje":
          $(".listTask")
            .children()
            .hide("fast", () => {
              $(".listTask").empty();
              $(".listTask").append(hoje());
              $(".listTask").children().show("fast")
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
// END nav
