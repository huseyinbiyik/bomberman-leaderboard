import './style.css';
import fetchData from './modules/fetchData.js';
import postData from './modules/postData.js';

// API "Game with ID: LzQ66iqiKtZlXDNStqI0

const refreshButton = document.querySelector('#refresh-button');
const addScoreForm = document.querySelector('#add-score');
const inputName = document.querySelector('#name');
const inputScore = document.querySelector('#score');

refreshButton.onclick = () => {
  fetchData();
};

window.onload = fetchData();

addScoreForm.onsubmit = (e) => {
  e.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;
  postData(name, score);
  addScoreForm.reset();
};
