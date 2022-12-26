import productModel from '../schemas/product.schema';
import type { ProductInterface } from '../../../contract/interfaces/product.interface';

export class ProductRepository {
  public async create(body: ProductInterface) {
    const product = await productModel.create({
      ...body,
    });
    if (!product) {
      return Promise.reject(new Error('Product not created!'));
    }
    return product;
  }

  public async findAll() {
    const product = await productModel.find();
    if (!product) {
      return Promise.resolve([]);
    }
    return product;
  }

  public async update(id: string, body: ProductInterface) {
    const product = await productModel.findOneAndUpdate(
      { _id: id },
      {
        ...body,
      }
    );
    if (!product) {
      return Promise.reject(new Error('Product not updated!'));
    }
    return product;
  }

  public async delete(id: string) {
    const product = await productModel.deleteOne({ _id: id });
    if (!product) {
      return Promise.reject(new Error('Product not deleted!'));
    }
    return product;
  }
}
export default ProductRepository;
