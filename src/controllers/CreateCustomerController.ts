import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { name, email } = request.body as { name: string; email: string };

            const customerService = new CreateCustomerService();
            const customer = await customerService.execute({ name, email });

            return reply.status(201).send(customer);
        } catch (error) {
            return reply.status(400).send({ error: (error as Error).message });
        }
    }
}

export { CreateCustomerController };
