import express from "express";

export default const app = express();
const PORT = 3000;

//JSON parser middleware
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});
