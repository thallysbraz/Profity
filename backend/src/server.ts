import express from "express";

const PORT = 3001;
const app = express();
app.use(express.json());

app.get("/users", (request, response) => {
  response.send("Hello word");
});

app.listen(PORT, () => {
  console.log(`server rodando na porta: ${PORT}`);
});
