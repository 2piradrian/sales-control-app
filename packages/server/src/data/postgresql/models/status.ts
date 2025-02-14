import { DataTypes, Model } from "sequelize";
import { env } from "../../../config";
import { PostgreDatabase } from "../database";

const database = new PostgreDatabase(env.POSTGRES_DB, env.POSTGRES_USER, env.POSTGRES_PASSWORD);
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
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "category"
});