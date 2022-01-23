import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(req: Request, res: Response) {
    const findAllAvailableUseCase = new FindAllAvailableUseCase();

    const result = await findAllAvailableUseCase.execute();

    return res.json(result);
  }
}
