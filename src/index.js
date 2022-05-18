import "./style.css";
import { fetchData } from "./modules/fetchData";
import { postData } from "./modules/postData";

// API "Game with ID: h2cnapwtxerd23BLvb63

const refreshButton = document.querySelector("#refresh-button");
const addScoreForm = document.querySelector("#add-score");
const inputName = document.querySelector("#name");
const inputScore = document.querySelector("#score");

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
