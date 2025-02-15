import { DataTypes, Model } from "sequelize";
import { env } from "../../../config";
import { PostgresqlDatabase } from "../database";
import { ProductModel } from "./product";

const database = new PostgresqlDatabase(env.POSTGRES_DB, env.POSTGRES_USER, env.POSTGRES_PASSWORD);
const sequelize = database.getSequelize();

export class StatusModel extends Model {};

StatusModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
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
    modelName: "category"
});

StatusModel.hasMany(ProductModel, { foreignKey: "statusId" });