import { StatusEntity, StatusRepository } from "../../domain";
import { PostgresqlStatusDataSource } from "../data-source/postgresql-status";

export class StatusRepository_I implements StatusRepository {
    private dataSource: PostgresqlStatusDataSource;

    constructor() {
        this.dataSource = new PostgresqlStatusDataSource();
    };

    public findAll(): Promise<StatusEntity[]> {
        return this.dataSource.findAll();
    };

    public findById(id: string): Promise<StatusEntity | null> {
        return this.dataSource.findById(id);
    };

}