import { Type } from "@prisma/client";

export const ProductType = {
  CRITICO: Type.CRITICO,
  SEMI_CRITICO: Type.SEMI_CRITICO,
  NAO_CRITICO: Type.NAO_CRITICO,
} as const;

export type ProductType = typeof ProductType[keyof typeof Type];
