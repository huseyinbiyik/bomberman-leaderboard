import './style.css';

// API "Game with ID: FIHLzuAEnXayuCvu6FH3

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FIHLzuAEnXayuCvu6FH3/scores')
  .then(response => response.json())
  .then(json => console.log(json));

//   fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FIHLzuAEnXayuCvu6FH3/scores', {
//   method: 'POST',
//   body: JSON.stringify({
//     user: 'michael2',
//     score: 55,
//   }),    
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));