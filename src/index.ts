import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import api from "./api";

const app = new Hono();

app.use("*", logger());
app.use(
  "/api/*",
  cors({
    origin: ["http://localhost:8000", "https://pranjal.me"],
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true
  })
);
app.get("/", (c) =>
  c.json({
    message: "Running happily ✨🌧️"
  })
);

app.route("/api", api);

export default app;
