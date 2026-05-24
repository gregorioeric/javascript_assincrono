// const loginUser = (email, password, callback) => {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback({ email });
//   }, 4000);

//   console.log("Logging in...");
// };

// Promises
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false; // Simulate success or failure

    if (error) {
      reject("Login failed");
    }

    console.log("Logging in...");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    const error = false; // Simulate success or failure

    if (error) {
      reject("Failed to fetch videos");
    }

    resolve(["video1", "video2", "video3"]);
    // Simula a obtenção de vídeos do usuário,
    // você pode adicionar lógica para simular falhas ou atrasos.
  });
};

const videoDetails = (video) => {
  return new Promise((resolve, reject) => {
    resolve({ title: "Video Title", duration: "2 hours" });
  });
};

loginUser("eric@example.com", "password123")
  .then((userData) => {
    console.log({ userData });
    return getUserVideos(userData.email);
  })
  .then((videos) => {
    console.log({ videos });
    return videoDetails(videos[0]);
  })
  .then((details) => {
    console.log({ details });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Este código usa Promises para lidar com operações assíncronas
// de forma mais legível e organizada. Ele simula o processo
// de login, obtenção de vídeos do usuário e detalhes do vídeo,
// lidando com erros de forma eficaz.

// Promise.all permite executar várias Promises em paralelo e aguardar
// que todas sejam resolvidas ou que uma seja rejeitada. Isso é útil
// quando você tem várias operações assíncronas independentes e
// deseja obter os resultados de todas elas antes de prosseguir.
// Aqui está um exemplo de como usar Promise.all:

const fetchData1 = new Promise((resolve) => {
  resolve("Data from fetch 1");
});

const fetchData2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data from fetch 2");
  }, 1000);
});

Promise.all([fetchData1, fetchData2])
  .then((results) => {
    console.log({ results });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
