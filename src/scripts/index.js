// index.js
import '../style/style.css';

import RenderImgs from './AddImgs.js';
import { DomActions } from './domAcoes.js';
import { FormController } from './formControle.js';

document.addEventListener("DOMContentLoaded", () => {
  new DomActions();
  new FormController();
  new RenderImgs();
});