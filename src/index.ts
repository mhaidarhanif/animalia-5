import { Hono } from "hono";
import { logger } from "hono/logger";

import { type Animal, dataAnimals } from "./data/animals";

const app = new Hono();

app.use(logger());

app.get("/", (c) => {
  return c.json({
    message: "Animalia API",
  });
});

app.get("/animals", (c) => {
  return c.json(dataAnimals);
});

app.get("/animals/:id", (c) => {
  const id = c.req.param("id");

  const animal = dataAnimals.find((animal) => animal.id === id);

  if (!animal) {
    return c.json({ message: "Animal not found", id }, 404);
  }

  return c.json(animal);
});

app.post("/animals", async (c) => {
  const animal: Animal = await c.req.parseBody();

  if (!animal.name) {
    return c.json({ message: "Name is required" }, 400);
  }

  dataAnimals.push(animal);

  return c.json(animal);
});

export default app;
