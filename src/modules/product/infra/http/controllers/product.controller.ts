import type { Request, Response } from 'express';

import CreateProductService from '../../../services/create-product.service';
import FindProductService from '../../../services/find-product.service';
import UpdateProductService from '../../../services/update-product.service';
import DeleteProductService from '../../../services/delete-product.service';

import { ProductRepository } from '../../../repositories/product.repository';

import type { ProductInterface } from '../../../interfaces/product.interface';

export class ProductController {
  private productRepository: ProductRepository = new ProductRepository();

  public async create(req: Request, res: Response) {
    const body: ProductInterface = req.body;
    const createProductService = new CreateProductService(
      this.productRepository
    );
    try {
      const product = await createProductService.execute({
        ...body,
      });
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(201).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }

  public async read(req: Request, res: Response) {
    const findProductService = new FindProductService(this.productRepository);
    try {
      const product = await findProductService.execute();
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(200).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const body: ProductInterface = req.body;

    const updateProductService = new UpdateProductService(
      this.productRepository
    );
    try {
      const product = await updateProductService.execute(id, {
        ...body,
      });
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(200).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService(
      this.productRepository
    );
    try {
      const product = await deleteProductService.execute(id);
      if (product instanceof Error) {
        return Promise.reject(res.status(400).json(product));
      }
      return Promise.resolve(res.status(200).json(product));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(500).json(error);
    }
  }
}
export default new ProductController();
