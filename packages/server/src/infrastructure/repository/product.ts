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

    public findById(code: string): Promise<ProductEntity | null> {
        return this.dataSource.findById(code);
    }

    public findByCategory(category: string): Promise<ProductEntity[] | null> {
        return this.dataSource.findByCategory(category);
    }

    public findByStatus(status: string): Promise<ProductEntity[] | null> {
        return this.dataSource.findByStatus(status);
    }

    public create(product: ProductEntity): Promise<ProductEntity> {
        return this.dataSource.create(product);
    }

    public update(product: ProductEntity): Promise<ProductEntity> {
        return this.dataSource.update(product);
    }

    public delete(code: string): Promise<void> {
        return this.dataSource.delete(code);
    }

}