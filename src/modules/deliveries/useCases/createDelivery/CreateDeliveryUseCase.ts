import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryUseCase {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDeliveryUseCase) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}
