import ProductForm from "../../components/ProductForm";
import api from "../../api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import MainLayout from "@/components/layouts/main";
import { useRouter } from "next/navigation";

export default function Edit({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const editProduct = async (data: any) => {
    try {
      await api.patch(`/products/${product.id}`, data);
      router.push("/");
    } catch (error) {
      alert("Tente novamente");
    }
  };
  return (
    <MainLayout title={product.name}>
      <ProductForm product={product} onSubmit={editProduct} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const result = await api(`/products/${id}`);
  const data = await result.data;

  return {
    props: {
      id,
      product: data,
    },
  };
};
