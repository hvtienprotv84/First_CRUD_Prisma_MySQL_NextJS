import { Type } from "@prisma/client";
import { Request, Response } from "express";
import { CreateProductDTO, UpdateProductDTO } from "../dto/product";
import Product from "../model/Product";

export async function createProduct(req: Request<{}, {}, CreateProductDTO>, res: Response) {
  const { name, description, type: type, registeredAt } = req.body;
  try {
    const product = new Product(null, name, description, type, new Date(registeredAt));
    const data = await product.save();
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Không tạo được sản phẩm!" });
  }
}

export async function deleteProduct(req: Request<{ id: number }>, res: Response) {
  const { id } = req.params;
  try {
    const product = await Product.delete(id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm." });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Không thể xóa sản phẩm." });
  }
}

export async function updateProduct(req: Request<{ id: number }, {}, UpdateProductDTO>, res: Response) {
  const { name, description, type: type, registeredAt } = req.body;
  const { id } = req.params;
  try {
    const product = new Product(id, name, description, type, new Date(registeredAt));
    const data = await product.save();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Không thể cập nhật sản phẩm." });
  }
}

export async function findProduct(req: Request<{ id?: number }, {}, {}, { name?: string }>, res: Response) {
  const { id } = req.params;
  const { name } = req.query;

  try {
    if (id) {
      const product = await Product.findById(id);
      return res.status(200).json(product);
    }
    if (name) {
      const product = await Product.findByName(name);
      return res.status(200).json(product);
    }

    const products = await Product.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Không thể cập nhật sản phẩm." });
  }
}
