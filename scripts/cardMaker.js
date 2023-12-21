import { selectorAll } from "./selector.js";
import { getRandomNumber } from "./getRandomNumber.js";
import { rndNum } from "./index.js";
import checkRowsAndColumnsForBoard from "./winChecker.js";

const cardMaker = (players, container, ele, tableSize, addEle) => {
  let arr = tableSize.split("X").map(Number);
  const [first, second] = arr;
  const sum = first * second;

  container.innerHTML = "";

  const randomNumbers = [];
  for (let j = 0; j < sum * players; j++) {
    randomNumbers.push(getRandomNumber());
  }

  for (let i = 0; i < players; i++) {
    container.innerHTML += ele;
  }

  const inside = selectorAll(".inside");

  inside.forEach((ins) => {
    ins.classList.add("grid", `grid-cols-${first}`);

    for (let i = 0; i < sum; i++) {
      ins.insertAdjacentHTML("beforeend", addEle);
    }
    ins.addEventListener("click", (e) => {
      if (e.target.tagName == "P" && e.target.innerText == rndNum.innerText) {
        e.target.classList.add(
          "bg-green-500/50",
          "pointer-events-none",
          "line-through"
        );
      }

      checkRowsAndColumnsForBoard(ins, first);
    });
  });
  const cell = selectorAll(".inside .cell");
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = randomNumbers[i];
  }
};

export default cardMaker;
