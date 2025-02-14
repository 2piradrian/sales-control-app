import { CategoryModel } from "./models/category";
import { ProductModel } from "./models/product";
import { StatusModel } from "./models/status";

ProductModel.belongsTo(CategoryModel, { foreignKey: "categoryId" });
ProductModel.belongsTo(StatusModel, { foreignKey: "statusId" });

CategoryModel.hasMany(ProductModel, { foreignKey: "categoryId" });
StatusModel.hasMany(ProductModel, { foreignKey: "statusId" });
