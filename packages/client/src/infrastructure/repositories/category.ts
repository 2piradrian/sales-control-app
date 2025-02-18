import { CategoryDataSourceI, CategoryEntity, CategoryRepositoryI } from "../../domain";
import { CategoryApiDataSource } from "../datasources/category-api";

export class CategoryRepository implements CategoryRepositoryI {

    private dataSource: CategoryDataSourceI;

    constructor(dataSource: CategoryDataSourceI = new CategoryApiDataSource()){
        this.dataSource = dataSource;
    }

    async findAll(): Promise<CategoryEntity[]> {
        try {
            return this.dataSource.findAll();
        }
        catch (error) {
            throw error;
        }
    };

    async findById(id: string): Promise<CategoryEntity | null> {
        try {
            return this.dataSource.findById(id);
        }
        catch (error) {
            throw error;
        }
    };

    async create(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            return this.dataSource.create(category);
        }
        catch (error) {
            throw error;
        }
    };

    async update(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            return this.dataSource.update(category);
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

};