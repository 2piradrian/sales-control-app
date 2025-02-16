import { ProductDataSourceI, ProductEntity, ProductRepositoryI } from "../../domain";
import { ProductApiDataSource } from "../datasources/product-api";

export class ProductRepository implements ProductRepositoryI {

    private dataSource: ProductDataSourceI;

    constructor(dataSource: ProductDataSourceI = new ProductApiDataSource()){
        this.dataSource = dataSource;
    }

    async findAll(): Promise<ProductEntity[]> {
        try {
            return this.dataSource.findAll();
        }
        catch (error) {
            throw error;
        }
    };
    
    async findById(id: string): Promise<ProductEntity | null> {
        try {
            return this.dataSource.findById(id);
        }
        catch (error) {
            throw error;
        }
    };

    async findByCategory(categoryId: string): Promise<ProductEntity[]> {
        try {
            return this.dataSource.findByCategory(categoryId);
        }
        catch (error) {
            throw error;
        }
    };

    async findByStatus(statusId: string): Promise<ProductEntity[]> {
        try {
            return this.dataSource.findByStatus(statusId);
        }
        catch (error) {
            throw error;
        }
    };

    async create(product: ProductEntity): Promise<ProductEntity> {
        try {
            return this.dataSource.create(product);
        }
        catch (error) {
            throw error;
        }
    };

    async update(product: ProductEntity): Promise<ProductEntity> {
        try {
            return this.dataSource.update(product);
        }
        catch (error) {
            throw error;
        }
    };

    async delete(id: string): Promise<void> {
        try {
            return this.dataSource.delete(id);
        }
        catch (error) {
            throw error;
        }
    };
    
}