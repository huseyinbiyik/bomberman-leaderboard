const displayBoard = document.querySelector('.display-board');

const renderItems = (item, index) => {
  displayBoard.innerHTML += `<p>${index + 1}-${item.user}: ${item.score}</p>`;
};

const renderUi = (object) => {
  displayBoard.innerHTML = '';
  const scoreArrray = object.result;
  scoreArrray.sort((a, b) => b.score - a.score);
  scoreArrray.forEach(renderItems);
};

export default renderUi;