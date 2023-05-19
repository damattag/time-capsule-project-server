import "dotenv/config";

import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import Static from "@fastify/static";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";

const app = fastify();

app.register(multipart);

app.register(Static, {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
});

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  secret: "spacetime",
});

app.register(authRoutes, { prefix: "/register" });
app.register(uploadRoutes, { prefix: "/upload" });
app.register(memoriesRoutes, { prefix: "/memories" });

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 HTTP server running on port http://localhost:3333");
  });
