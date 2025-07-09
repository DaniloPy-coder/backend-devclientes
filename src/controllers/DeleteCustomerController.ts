import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params;

        const customerService = new DeleteCustomerService();

        const customer = await customerService.execute({ id });

        reply.send(customer);
    }
}

export { DeleteCustomerController };
