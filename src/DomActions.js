import { createDom } from "./DomGetData.js";
import _ from "lodash";
// nav
$(".nav").on("click", (event) => {
  if ($(event.target) && $(event.target.classList.contains("item-nav"))) {
    // alert("clicado " + $(event.target).text());
    switch ($(event.target).text()) {
      case "Adicionar Tarefa":
        $(".formulario").toggle("fast");
        break;

      default:
        break;
    }
  }
});
$("#addTask").on("click", () => {
  $(".formulario").toggle("fast");
});
// END nav
