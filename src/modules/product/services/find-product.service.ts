import { ProductRepository } from '../infra/database/repositories/product.repository';

export class FindProductService {
  public constructor(private readonly productRepository: ProductRepository) {}
  public async execute() {
    return this.productRepository.findAll();
  }
}
export default FindProductService;
