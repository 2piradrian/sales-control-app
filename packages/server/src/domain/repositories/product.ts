import { ProductEntity } from "../entities/product";

export abstract class ProductRepository {
    abstract findAll(): Promise<ProductEntity[]>;
    abstract findById(id: string): Promise<ProductEntity | null>;
    abstract findByCategory(categoryId: string): Promise<ProductEntity[]>;
    abstract findByStatus(statusId: string): Promise<ProductEntity[]>;
    abstract create(product: ProductEntity): Promise<ProductEntity>;
    abstract update(product: ProductEntity): Promise<ProductEntity>;
    abstract delete(id: string): Promise<void>;
}