const { prisma } = require("./prisma/db.setup");
const app = require("express")();

const port = 3000;

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.send("Hello World!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
