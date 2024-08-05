import Link from "next/link";
import { useForm } from "react-hook-form";
import IProduct, { ProductType } from "../interface/IProduct";

export type ProductFormProps = {
  product?: IProduct;
  onSubmit: (data: any) => void;
};

const initialState: IProduct = {
  description: "",
  name: "",
  registeredAt: "",
  type: ProductType.CRITICO,
};

export default function ProductForm({ product = initialState, onSubmit }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="w-96 m-auto mt-24 bg-gray-300 p-6 rounded-md shadow-lg">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="w-full flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name">Tên Sản Phẩm</label>
          <input
            {...register("name", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            type="text"
            name="name"
            id="name"
            defaultValue={product.name}
          />
        </div>
        <div>
          <label htmlFor="description">Mô Tả</label>
          <input
            {...register("description", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            type="text"
            name="description"
            id="description"
            defaultValue={product.description}
          />
        </div>
        <div>
          <label htmlFor="">Trạng Thái</label>
          <select
            {...register("type", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            name="type"
            id="type"
            defaultValue={product?.type}
          >
            <option value="NAO_CRITICO">🟢 Còn Hàng</option>
            <option value="SEMI_CRITICO">🟡 Số Lượng ít</option>
            <option value="CRITICO">🔴 Hết Hàng</option>
          </select>
        </div>
        <div>
          <label htmlFor="registeredAt">Ngày Tạo</label>
          <input
            {...register("registeredAt", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            type="date"
            name="registeredAt"
            id="registeredAt"
            defaultValue={product.registeredAt.split("T")[0]}
          />
        </div>
        <div className="flex gap-4">
          <Link href="/" className="px-4 py-2 bg-lime-500 hover:bg-lime-400 rounded-sm text-white">
            Hủy
          </Link>
          <button className="flex-1 px-4 py-2 bg-purple-800 hover:bg-purple-600 rounded-sm text-white" type="submit">
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
}
