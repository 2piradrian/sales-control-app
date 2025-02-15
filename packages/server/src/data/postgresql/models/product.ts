import { DataTypes, Model } from "sequelize";
import { env } from "../../../config";
import { PostgresqlDatabase } from "../database";
import { CategoryModel } from "./category";
import { StatusModel } from "./status";

const database = new PostgresqlDatabase(env.POSTGRES_DB, env.POSTGRES_USER, env.POSTGRES_PASSWORD);
const sequelize = database.getSequelize();

export class ProductModel extends Model {};

ProductModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_alert: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: CategoryModel,
            key: "id"
        }
    },
    statusId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: StatusModel,
            key: "id"
        }
    },
    index: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "product"
});

ProductModel.belongsTo(CategoryModel, { foreignKey: "categoryId" });
ProductModel.belongsTo(StatusModel, { foreignKey: "statusId" });