import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import dotenv from "dotenv";

dotenv.config();

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

const start = async () => {

    await app.register(cors, {
        origin: true,
        methods: ['GET', 'POST', 'DELETE'],
    }); await app.register(routes);

    try {
        await app.listen({ port: 3333 });
    } catch (err) {
        process.exit(1)
    }
}

start();
