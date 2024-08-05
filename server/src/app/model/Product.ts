import prisma from "../config/prisma";
import { ProductType } from "../types/product";

export default class Product {
  id: number | null;
  name: string;
  description: string;
  productType: ProductType;
  registeredAt: Date;

  constructor(id: number | null, name: string, description: string, productType: ProductType, registeredAt: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.productType = productType;
    this.registeredAt = registeredAt;
  }

  static async getAll() {
    try {
      const result = await prisma.product.findMany({ orderBy: { id: "desc" } });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      await prisma.$disconnect();
    }
  }

  static async findById(id: number) {
    try {
      const result = await prisma.product.findUnique({ where: { id: +id } });
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      await prisma.$disconnect();
    }
  }

  static async findByName(name: string) {
    try {
      const result = await prisma.product.findMany({ where: { name: { contains: name } }, orderBy: { id: "desc" } });
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      await prisma.$disconnect();
    }
  }

  static async delete(id: number) {
    try {
      const result = await prisma.product.delete({ where: { id: +id } });
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      await prisma.$disconnect();
    }
  }

  async save() {
    const data = {
      name: this.name,
      description: this.description,
      type: this.productType,
      registeredAt: this.registeredAt,
    };

    try {
      if (!this.id) {
        const product = await prisma.product.create({
          data,
        });
        return product;
      } else {
        const product = await prisma.product.update({
          where: {
            id: +this.id,
          },
          data,
        });
        return product;
      }
    } catch (error) {
      console.log(error);
    } finally {
      await prisma.$disconnect();
    }
  }
}
