import api from "@/api";
import MainLayout from "@/components/layouts/main";
import ProductForm from "../components/ProductForm";
import { useRouter } from 'next/router';

export default function Create() {

  const router = useRouter();

  const createProduct = async (data: any) => {
    try {
      await api.post("/products/create", data);
      alert("Sản phẩm đã được tạo");
      router.push("/"); // Điều hướng về trang chính
    } catch (error) {
      alert("Không thể tạo");
    }
  };
  return (
    <MainLayout title="Criar">
      <ProductForm onSubmit={createProduct} />
    </MainLayout>
  );
}
