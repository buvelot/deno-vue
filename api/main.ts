import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import data from "./data.json" assert { type: "json" };

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome to Pokemon API!";
  })
  .get("/api", (context) => {
    context.response.body = data;
  })
  .get("/api/:pokemon", (context) => {
    if (context?.params?.pokemon) {
      const found = data.find((item) =>
        item.name.toLowerCase() === context.params.pokemon.toLowerCase()
      );
      if (found) {
        context.response.body = found;
      } else {
        context.response.body = "No pokemon found.";
      }
    }
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });