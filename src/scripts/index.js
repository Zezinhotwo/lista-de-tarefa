// index.js
import '../style/style.css';

import RenderImgs from './AddImgs.js';
import CheckTask from './check-task.js';
import { DomActions } from './domAcoes.js';
import { FormController } from './formControle.js';

// import { getDomValueTask } from './getDomValueTask.js/index.js';
document.addEventListener("DOMContentLoaded", () => {
  new DomActions();
  new FormController();
  new RenderImgs();
  new CheckTask();
  // new getDomValueTask();
});