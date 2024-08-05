import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import api from "@/api";
import Link from "next/link";
import ProductTable from "@/components/ProductTable";
import MainLayout from "@/components/layouts/main";
import { useState } from "react";
import IProduct from "@/interface/IProduct";
import { useForm } from "react-hook-form";

export default function Home({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [currentProducts, setProducts] = useState<IProduct[]>(products);
  const { handleSubmit, register } = useForm();

  const filter = async (data: any) => {
    const result = await api("/products", { params: { name: data.search } });
    const products = await result.data;
    setProducts(products);
  };

  const onDeleteProduct = async (product: IProduct) => {
    await api.delete(`/products/${product.id}`);
    const newState = currentProducts.filter((p) => p.id !== product.id);
    setProducts(newState);
  };

  return (
    <MainLayout title="Tiến - CRUD - Prisma - NextJS">
      <div className="flex flex-col items-center gap-4 justify-between lg:flex-row my-8">
        <Link href="/create" className="px-4 py-2 text-white bg-purple-800 hover:bg-purple-600 rounded-sm">
        Thêm Sản Phẩm
        </Link>

        <div>
          <form className="flex gap-2" onSubmit={handleSubmit(filter)}>
            <input
              {...register("search")}
              className="px-4 py-2 text-black bg-gray-300 focus:ring focus:outline rounded-sm"
              type="text"
              name="search"
              id="search"
              placeholder="vd: xiaomi"
            />
            <button type="submit" className="px-4 py-2 bg-purple-800 hover:bg-purple-600 text-white rounded-sm">
              Tìm Kiếm
            </button>
          </form>
        </div>
      </div>
      <div className="px-2 lg:px-0 min-w-[32em] lg:min-w-[42rem]">
        <ProductTable products={currentProducts} onDeleteProduct={onDeleteProduct} />
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let products: null | IProduct = null;
  try {
    const result = await api("/products");
    products = await result.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      products: products,
    },
  };
};
