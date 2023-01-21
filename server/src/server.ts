// Back-end API RESTfull

import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const port = 3333;
const app = Fastify();

/**
 * Método HTTP: Get, Post, Put, Patch, Delete
 */

app.register(cors);
app.register(appRoutes);

app.listen({
    port, host: '0.0.0.0'
}).then((address) => {
    console.log(`HTTP Server running on port ${address}!`);
});