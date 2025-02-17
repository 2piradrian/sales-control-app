import { DataTypes, Model, Sequelize } from "sequelize";

export class ProductModel extends Model {

    static initModel(sequelize: Sequelize) {
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
            stockAlert: {
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
                    model: "categories",
                    key: "id"
                }
            },
            statusId: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "statuses",
                    key: "id"
                }
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
            modelName: "product",
            tableName: "products"
        });
    }

};