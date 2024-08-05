export default interface IProduct {
    id?: number | null;
    name: string;
    description: string;
    type: string;
    registeredAt: string;
  }
  export enum ProductType {
    CRITICO = "🔴 Hết Hàng",
    NAO_CRITICO = "🟢 Còn Hàng",
    SEMI_CRITICO = "🟡 Số Lượng ít",
  }
  