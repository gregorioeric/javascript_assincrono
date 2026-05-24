const loginUser = (email, password, callback) => {
  setTimeout(() => {
    console.log("User logged in");
    callback({ email });
  }, 4000);

  console.log("Logging in...");
};

const user = loginUser("eric@example.com", "password123", (userData) => {
  console.log({ userData });
});

// console.log({ user });
// This will log 'undefined' because the function is asynchronous
// Este console.log(user) não irá mostrar o usuário porque a
// função loginUser é assíncrona e retorna antes de obter o
// resultado. Para lidar com isso, você pode usar
// callbacks, Promises ou async/await para garantir
// que o valor seja retornado corretamente.
