import { CategoryModel } from "../../data";
import { CategoryDataSource, CategoryEntity } from "../../domain";

export class PostgresqlCategoryDataSource implements CategoryDataSource {

    public async findAll(): Promise<CategoryEntity[]> {
        try {
            const categories = await CategoryModel.findAll();

            return categories.map(category => CategoryEntity.fromObject(category)) || [];
        }
        catch(error){
            throw error
        }
    };

    public async findById(id: string): Promise<CategoryEntity | null> {
        try {
            const category = await CategoryModel.findByPk(id);

            return category ? CategoryEntity.fromObject(category) : null;
        }
        catch(error){
            throw error
        }
    };

    public async create(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            const categoryModel = new CategoryModel({
                ...category,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            const createdCategory = await categoryModel.save();

            return CategoryEntity.fromObject(createdCategory);
        }
        catch(error){
            throw error
        }
    };

    public async update(category: CategoryEntity): Promise<CategoryEntity> {
        try {
            const categoryModel = await CategoryModel.findOne({ where: { id: category.id } });
            
            const categoryFromDB = CategoryEntity.fromObject(categoryModel!);
            const updatedCategory = { 
                ...categoryFromDB, 
                ...category, 
                updatedAt: new Date(),
            };

            categoryModel!.set(updatedCategory);

            await categoryModel!.save();

            return CategoryEntity.fromObject(categoryModel!);
        }
        catch(error){
            throw error
        }
    };

    public async delete(id: string): Promise<void> {
        try {
            await CategoryModel.destroy({ where: { id: id } });
        }
        catch(error){
            throw error
        }
    };
    
}