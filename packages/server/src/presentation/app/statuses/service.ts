import { ErrorHandler, ErrorType, GetStatusByIdDTO } from "../../../domain";
import { StatusRepository_I } from "../../../infrastructure";

export class StatusService {
    constructor(
        private readonly statusRepository = new StatusRepository_I(),
    ){}

    public async getAll() {
        try {
            return await this.statusRepository.findAll()
        }
        catch(error){
            throw error
        }
    }

    public async getById(dto: GetStatusByIdDTO) {
        try {
            const category = await this.statusRepository.findById(dto.id);
            
            if (!category) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }

            return category;
        }
        catch(error){
            throw error
        }
    };

}