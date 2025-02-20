import { CategoryRepository, CategoryEntity } from "../../domain";
import { PostgresqlCategoryDataSource } from "../data-source/postgresql-category";

export class CategoryRepository_I implements CategoryRepository {
    private dataSource: PostgresqlCategoryDataSource;

    constructor() {
        this.dataSource = new PostgresqlCategoryDataSource();
    };

    public findAll(): Promise<CategoryEntity[]> {
        return this.dataSource.findAll();
    };

    public findById(id: string): Promise<CategoryEntity | null> {
        return this.dataSource.findById(id);
    };

    public create(category: CategoryEntity): Promise<CategoryEntity> {
        return this.dataSource.create(category);
    };

    public update(category: CategoryEntity): Promise<CategoryEntity> {
        return this.dataSource.update(category);
    };

    public delete(id: string): Promise<void> {
        return this.dataSource.delete(id);
    };

}