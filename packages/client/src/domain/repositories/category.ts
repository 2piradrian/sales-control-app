import { CategoryEntity } from '../entities/category';

export abstract class CategoryRepositoryI {
    abstract findAll(): Promise<CategoryEntity[]>;
    abstract findById(id: string): Promise<CategoryEntity | null>;
    abstract create(category: CategoryEntity): Promise<CategoryEntity>;
    abstract update(category: CategoryEntity): Promise<CategoryEntity>;
    abstract delete(id: string): Promise<void>;
}