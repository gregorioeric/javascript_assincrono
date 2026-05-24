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

const displayUserVideos = async () => {
  try {
    const userData = await loginUser("eric@gmail.com", "password");
    const videos = await getUserVideos(userData.email);
    const details = await videoDetails(videos[0]);
    console.log({ userData, videos, details });
    // Você pode escolher o que deseja exibir aqui, como:
  } catch (error) {
    console.error("Error:", error);
  }
};

displayUserVideos();
// Este código usa async/await para lidar com operações assíncronas
// de forma mais legível e fácil de entender. Ele aguarda a
// resolução de cada Promise antes de prosseguir para a próxima
// etapa, tornando o fluxo do código mais linear e fácil de seguir.
