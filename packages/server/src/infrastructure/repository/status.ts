import { CategoryEntity, StatusRepository } from "../../domain";
import { PostgresqlCategoryDataSource } from "../data-source/postgresql-category";
import { PostgresqlStatusDataSource } from "../data-source/postgresql-status";

export class StatusRepository_I implements StatusRepository {
    private dataSource: PostgresqlStatusDataSource;

    constructor() {
        this.dataSource = new PostgresqlCategoryDataSource();
    };

    public findAll(): Promise<CategoryEntity[]> {
        return this.dataSource.findAll();
    };

    public findById(id: string): Promise<CategoryEntity | null> {
        return this.dataSource.findById(id);
    };

}