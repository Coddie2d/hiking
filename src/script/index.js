import "../style/index.scss";
import * as bootstrap from 'bootstrap';
//import 'slick-carousel';
import * as functions from "./functions.js"
import $ from 'jquery';

import 'pagepiling.js';
import 'pagepiling.js/dist/jquery.pagepiling.css';
functions.burgerClick();

let tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach((e) => e.insertAdjacentHTML("afterbegin",`<p class="pp-tooltip right gilroy">${e.dataset.tooltip}</p>`))

