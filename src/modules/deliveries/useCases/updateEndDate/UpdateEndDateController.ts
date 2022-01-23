import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(req: Request, res: Response) {
    const { id: id_delivery } = req.params;
    const { id_deliveryman } = req;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const result = await updateEndDateUseCase.execute({
      id_delivery,
      id_deliveryman,
    });

    return res.json(result);
  }
}
