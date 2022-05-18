import renderUi from './renderUi.js';

const fetchData = async() => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/h2cnapwtxerd23BLvb63/scores',
  )
    .then((response) => response.json())
    .then((json) => renderUi(json));
}

export default fetchData;