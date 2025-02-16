import { HTTPClient } from "../../core";
import { ProductDataSourceI, ProductEntity } from "../../domain";

export class ProductApiDataSource implements ProductDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    };

    public async findAll(): Promise<ProductEntity[]> {
        try {
            return await this.httpClient.get("/products/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo los productos: " + error);
        }

    };

    public async findById(id: string): Promise<ProductEntity> {
        try {
            return await this.httpClient.get("/products/get-by-id", { id: id });
        }
        catch (error) {
            throw new Error("Error buscando el producto: " + error);
        }
    };

    public async findByCategory(categoryId: string): Promise<ProductEntity[]> {
        try {
            return await this.httpClient.get("/products/get-by-category", { categoryId: categoryId });
        }
        catch (error) {
            throw new Error("Error buscando los productos: " + error);
        }
    };

    public async findByStatus(statusId: string): Promise<ProductEntity[]> {
        try {
            return await this.httpClient.get("/products/get-by-status", { statusId: statusId });
        }
        catch (error) {
            throw new Error("Error buscando los productos: " + error);
        }
    };

    public async create(product: ProductEntity): Promise<ProductEntity> {
        try {
            return await this.httpClient.post("/products/create", product);
        }
        catch (error) {
            throw new Error("Error creando el producto: " + error);
        }
    };

    public async update(product: ProductEntity): Promise<ProductEntity> {
        try {
            return await this.httpClient.put("/products/update", product);
        }
        catch (error) {
            throw new Error("Error actualizando el producto: " + error);
        }
    };

    public async delete(id: string): Promise<void> {
        try {
            await this.httpClient.delete("/products/delete", { id: id });
        }
        catch (error) {
            throw new Error("Error eliminando el producto: " + error);
        }
    };

}