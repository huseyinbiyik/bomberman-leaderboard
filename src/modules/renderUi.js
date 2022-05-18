const displayBoard = document.querySelector(".display-board");
export function renderUi(items) {
  displayBoard.innerHTML = "";
  items.result.forEach(renderItems);
}

let renderItems = (item) => {
  displayBoard.innerHTML += `<p>${item.user}: ${item.score}</p>`;
};
