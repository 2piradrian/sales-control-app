import { StatusModel } from "../../data";
import { StatusDataSource, StatusEntity } from "../../domain";

export class PostgresqlStatusDataSource implements StatusDataSource {

    public async findAll(): Promise<StatusEntity[]> {
        try {
            const statuses = await StatusModel.findAll();

            return statuses.map(status => StatusEntity.fromObject(status)) || [];
        }
        catch(error){
            throw error
        }
    };

    public async findById(id: string): Promise<StatusEntity | null> {
        try {
            const status = await StatusModel.findByPk(id);

            return status ? StatusEntity.fromObject(status) : null;
        }
        catch(error){
            throw error
        }
    };
    
}