import {Type} from "@prisma/client"

export type CreateProductDTO = {
  id?: number | null;
  name: string;
  description: string;
  type: Type;
  registeredAt: string;
};

export type UpdateProductDTO = {
  name: string;
  description: string;
  type: Type;
  registeredAt: string;
};
