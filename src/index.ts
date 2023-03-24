import { Hono } from "hono";
import { logger } from "hono/logger";
import quotesList from "./data/quotes";
import { randomShuffle } from "./utils/shuffle";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) =>
  c.json({
    message: "Running happily ✨🌧️"
  })
);

app.get("/api/quotes/random", (c) => {
  const shuffledQuotes = randomShuffle(quotesList);
  return c.json({
    count: 3,
    quotes: shuffledQuotes.slice(0, 3)
  });
});

export default app;
