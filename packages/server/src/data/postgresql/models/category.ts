import { DataTypes, Model, Sequelize } from "sequelize";

export class CategoryModel extends Model {

    static initModel(sequelize: Sequelize) {
        CategoryModel.init({
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
            modelName: "category",
            tableName: "categories"
        });
    }

};