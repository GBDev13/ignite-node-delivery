import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliverymanUseCase {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliverymanUseCase) {
    const delivery = await prisma.deliveries.findFirst({
      where: {
        id: id_delivery,
      },
    });

    if (delivery?.id_deliveryman) {
      throw new Error("Delivery not available");
    }

    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return result;
  }
}
