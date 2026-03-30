import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
const PORT = 3000;

//JSON parser middleware
app.use(express.json());

async function main() {
  // Create a new author with an article
  const newAuthor = await prisma.author.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      article: {
        create: {
          title: "Hello World",
          content: "This is my first article!",
        },
      },
    },
    include: {
      article: true,
    },
  });
  console.log("Created author:", newAuthor);

  // Fetch all authors with their articles
  const authors = await prisma.author.findMany({
    include: {
      article: true,
    },
  });
  console.log("All authors:", JSON.stringify(authors, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
