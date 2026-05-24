const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log("User logged in");
    callback({ email });
  }, 4000);

  console.log("Logging in...");
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    console.log("Videos fetched");
    callback(["video1", "video2", "video3"]);
  }, 2000);
};

const videoDetails = (video, callback) => {
  setTimeout(() => {
    console.log("Video details fetched");
    callback({ title: "Video Title", duration: "2 hours" });
  }, 1000);
};

const user = loginUser("eric@example.com", "password123", (userData) => {
  getUserVideos(userData.email, (videos) => {
    console.log({ videos });
    videoDetails(videos[0], (details) => {
      console.log({ details });
    });
  });
});
