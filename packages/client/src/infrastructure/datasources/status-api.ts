import { HTTPClient } from "../../core";
import { StatusDataSourceI, CategoryEntity } from "../../domain";

export class StatusApiDataSource implements StatusDataSourceI {

    private httpClient: HTTPClient;

    constructor(){
        this.httpClient = new HTTPClient();
    };

    public async findAll(): Promise<CategoryEntity[]> {
        try {
            return await this.httpClient.get("/statuses/get-all");
        }
        catch (error) {
            throw new Error("Error obteniendo los estados: " + error);
        }

    };

    public async findById(id: string): Promise<CategoryEntity> {
        try {
            return await this.httpClient.get("/statuses/get-by-id", { id: id });
        }
        catch (error) {
            throw new Error("Error buscando el estado: " + error);
        }
    };

}