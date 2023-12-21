import loopCreator from "./loopCreator.js";
import { selector, selectorAll } from "./selector.js";
import classToggler from "./classToggler.js";
import "./getRandomNumber.js";
import { getRandomNumber, history } from "./getRandomNumber.js";
import createInterval from "./createInterval.js";
import cardMaker from "./cardMaker.js";

const playerNum = selector("#playerNum");

const arrPlayerNum = [1, 2, 3];
loopCreator(
  arrPlayerNum,
  "li",
  playerNum,
  "text-4xl py-2 xl:py-6 cursor-pointer hover:bg-cyan-500/25 rounded-lg border-b-4 border-indigo-200/75 flex justify-evenly items-center",
  true,
  `<i class="fas fa-user text-xl p-2 text-cyan-500"></i>`
);

const boardSize = selector("#boardSize");
const arrBoardSize = ["3X3", "4X4", "5X5"];

loopCreator(
  arrBoardSize,
  "li",
  boardSize,
  "text-2xl py-2 xl:py-6 tracking-wide cursor-pointer hover:bg-cyan-500/25 rounded-lg flex items-center justify-evenly border-b-4 border-indigo-200/75",
  true,
  `<i class="fa-solid fa-cube text-xl p-2 text-cyan-500"></i>`
);

const btn = selectorAll(".btn");

btn.forEach((bt) => {
  bt.addEventListener("click", () => {
    classToggler(bt.nextElementSibling, "diss");
  });
});

const li = selectorAll("li");

const valueSize = selector("#valueSize");
const valuePlayers = selector("#valuePlayers");

li.forEach((l) => {
  l.addEventListener("click", () => {
    classToggler(l.parentElement, "diss");
    l.textContent.includes("X")
      ? (valueSize.textContent = l.textContent)
      : (valuePlayers.textContent = l.textContent);
    if (valueSize.innerHTML != "" && valuePlayers.innerHTML != "") {
      play.classList.remove("pointer-events-none");
      play.classList.add("bg-violet-700/50");
    }
  });
});

const play = selector("#play");
export const tables = selector("#tables");

export const rndNum = selector("#rndNum");
const historyEle = selector("#history");

export const theInterval = setInterval(() => {
  createInterval(rndNum, getRandomNumber());
}, 5000);

setInterval(() => {
  createInterval(historyEle, history);
}, 10000);

const settings = selector("#settings");

export const startGame = (should) => {
  if (should) {
    classToggler(play.parentElement.parentElement, "diss");
    classToggler(settings.parentElement, "diss");
  }
  history.length = 0;
  cardMaker(
    valuePlayers.textContent,
    tables,
    `<div class="inside xl:w-[25vw] m-4 w-[80vw] h-[55vh] shadow-lg shadow-indigo-500/50"></div>`,
    valueSize.textContent,
    `<p class="cell text-white xl:text-3xl text-1xl flex justify-center items-center border hover:scale-75 hover:bg-purple-500/25 bg-cyan-500/25 transition-all"></p>`
  );
};
play.addEventListener("click", () => {
  startGame(true);
});

const settingsArray = ["Back Home", "Restart"];
loopCreator(
  settingsArray,
  "button",
  settings,
  "p-4 text-2xl bg-purple-500/25 shadow-lg shadow-cyan-500/50 hover:scale-95 transition-all",
  false,
  ""
);

settings.addEventListener("click", (e) => {
  if (e.target.innerText == "Back Home") {
    classToggler(
      e.target.parentElement.parentElement.previousElementSibling,
      "diss"
    );
    classToggler(e.target.parentElement.parentElement, "diss");
  } else if (e.target.innerText == "Restart") {
    startGame(false);
  }
});
