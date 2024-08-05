import IProduct from "../interface/IProduct";
import ProductRow from "./ProductRow";

export type ProductTableProps = {
  products: IProduct[];
  onDeleteProduct: (product: IProduct) => void;
};
export default function ProductTable({ products, onDeleteProduct }: ProductTableProps) {
  return (
    <div className="w-full shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-300 font-bold text-black">
              Tên Sản Phẩm
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-200 font-bold text-black">
              Trạng Thái
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-300 font-bold text-black">
              Mô Tả
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-200 font-bold text-black">
              Ngày Mở Bán
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-300 font-bold text-black">
              Chức Năng
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return <ProductRow product={product} key={i} onDelete={onDeleteProduct} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
