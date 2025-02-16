import { ProductEntity, ProductRepository } from "../../domain";
import { PostgresqlProductDataSource } from "../data-source/postgresql-product";

export class ProductRepository_I implements ProductRepository {
    private dataSource: PostgresqlProductDataSource;

    constructor() {
        this.dataSource = new PostgresqlProductDataSource();
    }

    public findAll(): Promise<ProductEntity[]> {
        return this.dataSource.findAll();
    }

    public findById(id: string): Promise<ProductEntity | null> {
        return this.dataSource.findById(id);
    }

    public findByCategory(categoryId: string): Promise<ProductEntity[]> {
        return this.dataSource.findByCategory(categoryId);
    }

    public findByStatus(statusId: string): Promise<ProductEntity[]> {
        return this.dataSource.findByStatus(statusId);
    }

    public create(product: ProductEntity): Promise<ProductEntity> {
        return this.dataSource.create(product);
    }

    public update(product: ProductEntity): Promise<ProductEntity> {
        return this.dataSource.update(product);
    }

    public delete(id: string): Promise<void> {
        return this.dataSource.delete(id);
    }

}