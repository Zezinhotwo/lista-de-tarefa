// index.js
import { DomActions } from "./domAcoes.js";
import { FormController } from "./formControle.js";
import "./style/style.css";

document.addEventListener("DOMContentLoaded", () => {
  new DomActions();
  new FormController();
});
