import { StatusEntity, StatusRepositoryI } from "../../domain";
import { StatusApiDataSource } from "../datasources/status-api";

export class StatusRepository implements StatusRepositoryI {

    private dataSource: StatusRepositoryI;

    constructor(dataSource: StatusRepositoryI = new StatusApiDataSource()){
        this.dataSource = dataSource;
    }

    async findAll(): Promise<StatusEntity[]> {
        try {
            return this.dataSource.findAll();
        }
        catch (error) {
            throw error;
        }
    };

    async findById(id: string): Promise<StatusEntity | null> {
        try {
            return this.dataSource.findById(id);
        }
        catch (error) {
            throw error;
        }
    };

};