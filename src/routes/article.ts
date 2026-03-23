import app from "../index.ts";

app.post("/articles", (req, res) => {
  res.send("Article created");
});

app.get("/articles", (req, res) => {
  res.send("List of articles");
});

app.get("/articles/:id", (req, res) => {
  res.send("List of articles");
});

app.patch("/articles/:id", (req, res) => {
  res.send("List of articles");
});

app.delete("/articles/:id", (req, res) => {
  res.send("List of articles");
});
