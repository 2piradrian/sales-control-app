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

}