const displayBoard = document.querySelector(".display-board");
export function renderUi(object) {
  displayBoard.innerHTML = "";
  let scoreArrray = object.result;
  scoreArrray.sort(function (a, b) {
    return b.score - a.score;
  });
  scoreArrray.forEach(renderItems);
}

let renderItems = (item) => {
  displayBoard.innerHTML += `<p>${item.user}: ${item.score}</p>`;
};
