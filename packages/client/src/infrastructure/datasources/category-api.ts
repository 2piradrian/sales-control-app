import { HTTPClient } from "../../core";
import { CategoryDataSourceI, CategoryEntity } from "../../domain";

export class CategoryApiDataSource implements CategoryDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    };

    public async findAll(): Promise<CategoryEntity[]> {
        try {
            return await this.httpClient.get("/categories/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo las categorias: " + error);
        }

    };

    public async findById(id: string): Promise<CategoryEntity> {
        try {
            return await this.httpClient.get("/categories/get-by-id", { id: id });
        }
        catch (error) {
            throw new Error("Error buscando la categoria: " + error);
        }
    };

    public async create(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            return await this.httpClient.post("/categories/create", category);
        }
        catch (error) {
            throw new Error("Error creando la categoria: " + error);
        }
    };

    public async update(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            return await this.httpClient.put("/categories/update", category);
        }
        catch (error) {
            throw new Error("Error actualizando la categoria: " + error);
        }
    };

    public async delete(id: string): Promise<void> {
        try {
            await this.httpClient.delete("/categories/delete", { id: id });
        }
        catch (error) {
            throw new Error("Error eliminando la categoria: " + error);
        }
    };

}