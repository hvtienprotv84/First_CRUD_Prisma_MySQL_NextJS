import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  updateProduct,
} from "../controllers/products.controller";

const productRouter = Router();

//Pega todos os produtos OU 1 Pelo ID OU Vários Por Nome 
productRouter.get("/products/:id", findProduct);
productRouter.get("/products/", findProduct);

//Deleta pelo ID
productRouter.delete("/products/:id", deleteProduct);

//Atualiza pelo ID
productRouter.patch("/products/:id", updateProduct);

//Cria produto
productRouter.post("/products/create", createProduct);

export default productRouter;
