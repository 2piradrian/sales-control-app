import { Sequelize } from 'sequelize';
import { CategoryModel } from "../models/category";
import { ProductModel } from "../models/product";
import { StatusModel } from "../models/status";

export default async function  setup(sequelize: Sequelize) {

    CategoryModel.initModel(sequelize);
    StatusModel.initModel(sequelize);
    ProductModel.initModel(sequelize);

    CategoryModel.hasMany(ProductModel, { foreignKey: "categoryId" });
    StatusModel.hasMany(ProductModel, { foreignKey: "statusId" });
    
    ProductModel.belongsTo(StatusModel, { foreignKey: "statusId" });
    ProductModel.belongsTo(CategoryModel, { foreignKey: "categoryId" });

    await seedDatabase();

}

async function seedDatabase() {
    try {

        const categoryCount = await CategoryModel.count();
        if (categoryCount === 0) {
            await CategoryModel.create({ name: "Sin Categoria" });
        }
        
        const statusCount = await StatusModel.count();
        if (statusCount === 0) {
            await StatusModel.create({ name: "Activo" });
            await StatusModel.create({ name: "Inactivo" });
        }

        console.log("Database seeded");
    } 
    catch (error) {
        console.log("Error seeding database", error);
    }
    
}