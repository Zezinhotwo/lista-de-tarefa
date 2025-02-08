import { AddImgs } from "./renderImg/renderIcons";

import iconAdd from "../img/add.png";
import iconToday from "../img/today.png";
import iconAll from "../img/all.png";
import iconCheck from "../img/check.png";
import iconYesterDay from "../img/yesterDay.png";

const addIcon = document.querySelector(".add-icon");
const todayIcon = document.querySelector(".today-icon");
const allIcon = document.querySelector(".all-icon");
const checkIcon = document.querySelector(".check-icon");
const yesterDayIcon = document.querySelector(".yesterDay-icon");

export default class RenderImgs {

    constructor() {
        this.init();
    }
    init() {
        new AddImgs(addIcon, iconAdd);
        new AddImgs(todayIcon, iconToday);
        new AddImgs(allIcon,iconAll);
        new AddImgs(checkIcon,iconCheck);
        new AddImgs(yesterDayIcon,iconYesterDay);
    }
}

