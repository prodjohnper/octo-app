import IProduct from "../interfaces/IProduct";

class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: string,
    public quantity: number,
    public category: string,
    public category_id: number,
    public created_at: string,
    public updated_at: string
  ) {}
}

export default Product;
