import { CategoryModel } from "../../data";
import { CategoryEntity, StatusDataSource } from "../../domain";

export class PostgresqlStatusDataSource implements StatusDataSource {

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
    
}