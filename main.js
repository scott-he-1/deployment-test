const { prisma } = require("./prisma/db.setup");
const app = require("express")();

const port = 5432;

app.get("/", async (req, res) => {
  return res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.send(users);
});

app.post("/users", async (req, res) => {
  const newUser = await prisma.user.create({
    data: {
      email: "test@test.com",
      passwordHash: "passwordHash",
    },
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
