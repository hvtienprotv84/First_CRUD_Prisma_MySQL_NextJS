import IProduct, { ProductType } from "../interface/IProduct";
import { RiEditFill } from "react-icons/ri";
import { BsFillTrash2Fill } from "react-icons/bs";
import moment from "moment";
import { getEnumValue } from "../utils/GetEnumValue";
import Link from "next/link";

export type ProductRowProps = {
  product: IProduct;
  onDelete: (product: IProduct) => void;
};

export default function ProductRow({ product, onDelete }: ProductRowProps) {
  return (
    <tr className="border-b border-gray-400">
      <th scope="row" className="px-6 py-4 font-medium text-gray-600 bg-gray-300">
        {product.name}
      </th>
      <td scope="row" className="px-6 py-4 text-gray-600 bg-gray-200">
        {getEnumValue(ProductType, product.type)}
      </td>
      <td scope="row" className="px-6 py-4 text-gray-600 bg-gray-300">
        {product.description}
      </td>
      <td scope="row" className="px-6 py-4 text-gray-600 bg-gray-200">
        {moment.utc(product.registeredAt).format("DD/MM/YYYY")}
      </td>
      <td scope="row" className="px-6 py-4 bg-gray-300 gap-2 ">
        <span className="flex gap-2">
          <Link href={`/edit/${product.id}`}>
            <RiEditFill className="text-sky-400 hover:text-sky-600" />
          </Link>
          <button onClick={() => onDelete(product)}>
            <BsFillTrash2Fill className="text-red-400 hover:text-red-300" />
          </button>
        </span>
      </td>
    </tr>
  );
}
