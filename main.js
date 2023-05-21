const { prisma } = require("./prisma/db.setup");
const app = require("express")();

const port = 3000;

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  console.log(users);
  return res.send(users);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
