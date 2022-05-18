export async function postData(name, score) {
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/h2cnapwtxerd23BLvb63/scores",
    {
      method: "POST",
      body: JSON.stringify({
        user: name,
        score: score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
}
