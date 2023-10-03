import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import CreateProductSerice from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProduct = new ListProductService();

    const products = await listProduct.execute();

    return response.json(products);
  }

  public async showProduct(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const showProduct = new ShowProductService();

    const product = await showProduct.execute({ id });

    return response.json(product);
  }

  public async createProduct(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductSerice();

    const product = await createProduct.execute({ name, price, quantity });

    return response.json(product);
  }

  public async updateProduct(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({ id, name, price, quantity });

    return response.json(product);
  }

  public async deleteProduct(request: Request, response: Response) {
    const { id } = request.params;

    const deleteProduct = new DeleteProductService();

    const product = await deleteProduct.execute({ id });

    return response.json(product);
  }
}
