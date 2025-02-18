import { DataTypes, Model, Sequelize } from "sequelize";

export class CategoryModel extends Model {

    static initModel(sequelize: Sequelize) {
        CategoryModel.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
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
            modelName: "category",
            tableName: "categories"
        });
    }

};