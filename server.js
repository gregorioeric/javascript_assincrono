const loginUser = (email, password) => {
  setTimeout(() => {
    console.log("User logged in");
    return { email };
  }, 2000);

  console.log("Logging in...");
};

const user = loginUser("eric@example.com", "password123");

console.log({ user });
// Este console.log(user) não irá mostrar o usuário porque a
// função loginUser é assíncrona e retorna antes de obter o
// resultado. Para lidar com isso, você pode usar
// callbacks, Promises ou async/await para garantir
// que o valor seja retornado corretamente.
