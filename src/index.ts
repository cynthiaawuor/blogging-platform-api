import express from "express";

const app = express();
const PORT = 3000;

//JSON parser middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
