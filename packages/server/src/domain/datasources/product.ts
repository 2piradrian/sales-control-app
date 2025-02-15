import { ProductEntity } from "../entities/product";

export abstract class ProductDataSource {
    abstract findAll(): Promise<ProductEntity[]>;
    abstract findById(id: string): Promise<ProductEntity | null>;
    abstract findByCategory(category: string): Promise<ProductEntity | null>;
    abstract findByStatus(status: string): Promise<ProductEntity | null>;
    abstract create(product: ProductEntity): Promise<ProductEntity>;
    abstract update(product: ProductEntity): Promise<ProductEntity>;
    abstract delete(id: string): Promise<void>;
}