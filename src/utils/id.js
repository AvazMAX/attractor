// // const express = require("express");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const fetch = require("node-fetch");

// // export const CLIENT_ID = "f9947e001590f3ed6c1e";
// // export const CLIENT_SECRET = "6de845c68b8a224179169191f31cd94ee6c5387f";

// // var app = express();

// // app.use(cors());
// // app.use(bodyParser.json());

// // app.get("/getAccessToken", async function (req, res) {
// //   try {
// //     const params = new URLSearchParams({
// //       client_id: CLIENT_ID,
// //       client_secret: CLIENT_SECRET,
// //       code: req.query.code,
// //     });

// //     const response = await fetch(
// //       "https://github.com/login/oauth/access_token",
// //       {
// //         method: "POST",
// //         body: params,
// //         headers: {
// //           Accept: "application/json",
// //         },
// //       }
// //     );

// //     const data = await response.json();
// //     res.json(data);
// //   } catch (error) {
// //     console.error("Error while getting access token:", error);
// //     res.status(500).send("Error getting access token");
// //   }
// // });

// // app.get("/getUserData", async function (req, res) {
// //   try {
// //     const response = await fetch("https://api.github.com/user", {
// //       method: "GET",
// //       headers: {
// //         Authorization: req.get("Authorization"),
// //       },
// //     });

// //     const data = await response.json();
// //     res.json(data);
// //   } catch (error) {
// //     console.error("Error while getting user data:", error);
// //     res.status(500).send("Error getting user data");
// //   }
// // });

// // app.listen(4000, function () {
// //   console.log("CORS server running on port 4000");
// // });



// // app
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter, Link, useNavigate } from "react-router-dom";
// import { CLIENT_SECRET, CLIEN_ID } from "./utils/id";
// import { AppRoutes } from "./routes/routes";

// const AppContent = () => {
//   const [userData, setUserData] = useState(null);
//   const history = useNavigate();

//   const scope = "ЗАПРАШИВАЕМЫЕ_РАЗРЕШЕНИЯ";

//   useEffect(() => {
//     const cod = new URLSearchParams(window.location.search).get("code");

//     if (cod) {
//       axios
//         .post("https://github.com/login/oauth/access_token", {
//           client_id: CLIEN_ID,
//           client_secret: CLIENT_SECRET,
//           code: cod,
//         })
//         .then((response) => {
//           const token = new URLSearchParams(response.data).get("access_token");
//           console.log("token: ", token);

//           // Сохраните токен в безопасном месте, например, в состоянии или localStorage
//           // После этого вы можете использовать этот токен для доступа к данным GitHub API
//         })
//         .catch((error) => {
//           console.error("Ошибка при обмене кода на токен:", error);
//         })
//         .finally(() => {
//           // После обмена кода на токен перенаправьте пользователя на другую страницу
//           history("/profile"); // Замените на необходимый URL
//         });
//     }
//   }, [history]);

//   // Функция для обработки нажатия кнопки авторизации
//   const handleLoginClick = () => {
//     // Перенаправьте пользователя на страницу авторизации GitHub
//     window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIEN_ID}&scope=${scope}`;
//   };

//   const [rerender, setRerender] = useState(false);

//   useEffect(() => {
//     const code = new URLSearchParams(window.location.search).get("code");

//     if (code && localStorage.getItem("accessToken") === null) {
//       async function getAccessToken() {
//         await fetch(`http://localhost:4000/getAccessToken?code=${code}`, {
//           method: "GET",
//         })
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             console.log(data);
//             if (data.access_token) {
//               localStorage.setItem("accessToken", data.access_token);
//               setRerender(!rerender);
//             }
//           });
//       }
//     }
//   }, []);

//   return (
//     <>
//       <h1>Avaz</h1>
//       {userData && (
//         <div>
//           <p>Имя пользователя GitHub: {userData.login}</p>
//           <p>ID: {userData.id}</p>
//           {/* Другие данные о пользователе */}
//         </div>
//       )}
//       <div>
//         <h1>Авторизация на GitHub</h1>
//         <p>Нажмите кнопку ниже, чтобы войти через GitHub:</p>
//         <button onClick={handleLoginClick}>Войти с помощью GitHub</button>
//         <p>
//           У вас еще нет аккаунта? <Link to="/signup">Зарегистрируйтесь</Link>
//         </p>
//       </div>
//       <AppRoutes />
//     </>
//   );
// };

// export const App = () => {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// };
