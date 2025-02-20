import { DataTypes, Model, Sequelize } from "sequelize";

export class StatusModel extends Model {

    static initModel(sequelize: Sequelize) {
        StatusModel.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
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
            modelName: "status",
            tableName: "statuses"
        });
    }
    
};