import { Sequelize } from "sequelize";
import setup from "./config/setup";

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

            await setup(this.sequelize);

            await this.sequelize.sync();

            console.log("Connected to Postgresql");

            return true;
        }
        catch(error){
            throw error;
        }
    }

}