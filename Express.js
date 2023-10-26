const express = require("express");
const axios = require("axios");
const { client_id, client_secret } = require("./src/utils/constants");

const app = express();
const PORT = 3001;
let accessToken;

app.get("/oauth/redirect", async (req, res) => {
  const requestToken = req.query.code;
  try {
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: client_id,
        client_secret: client_secret,
        code: requestToken,
      }
    );
    accessToken = new URLSearchParams(response.data).get("access_token");

    if (accessToken) {
      res.redirect(`http://localhost:3000/token=${accessToken}`);
    } else {
      console.error("GitHub не вернул токен:", response.data);
      res.status(500).send("Ошибка во время входа");
    }
  } catch (error) {
    console.error("Ошибка обмена кода на токен:", error);
    res.status(500).send("Ошибка во время входа");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
