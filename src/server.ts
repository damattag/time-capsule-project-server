import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(memoriesRoutes, { prefix: "/memories" });

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server running on https://localhost:3333");
  });
