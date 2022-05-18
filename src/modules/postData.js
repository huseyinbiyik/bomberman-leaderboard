const postData = async (name, score) => {
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/h2cnapwtxerd23BLvb63/scores",
    {
      method: "POST",
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => response.json());
};

export default postData;