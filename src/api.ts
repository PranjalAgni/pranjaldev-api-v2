import { Hono } from "hono";
import quotesList from "./data/quotes";
import { randomShuffle } from "./utils/shuffle";

const api = new Hono();

api.get("/quotes/random", (c) => {
  const count = Number(c.req.query("count")) || 3;
  const shuffledQuotes = randomShuffle(quotesList);
  return c.json({
    result: {
      count,
      quotes: shuffledQuotes.slice(0, count)
    }
  });
});

export default api;
