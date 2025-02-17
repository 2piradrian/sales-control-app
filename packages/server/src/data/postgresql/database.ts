import { Sequelize } from "sequelize";
import { ProductModel } from "./models/product";
import { CategoryModel } from "./models/category";
import { StatusModel } from "./models/status";

export class PostgresqlDatabase {

    public sequelize: Sequelize;

    constructor(db: string, user: string, password: string){
        this.sequelize = new Sequelize(db, user, password, {
            dialect: "postgres",
            logging: false
        });
    }

    public getSequelize() {
        return this.sequelize;
    }

    public async connect() {
        try{
            await this.sequelize.authenticate();
            await this.sequelize.sync();

            console.log("Connected to Postgresql");

            return true;
        }
        catch(error){
            throw error;
        }
    }

}