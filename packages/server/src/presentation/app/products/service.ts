import { CreateProductDTO, DeleteProductDTO, GetProductByIdDTO, ProductEntity, UpdateProductDTO } from "../../../domain";
import { ProductRepository_I } from "../../../infrastructure";

export class ProductService {
    constructor(
        private readonly repository = new ProductRepository_I()
    ){}

    public async findAll() {
        try {
            return await this.repository.findAll();
        }
        catch(error){
            throw error
        }
    }

    public async findById(dto: GetProductByIdDTO) {
        try {
            return await this.repository.findById(dto.id);
        }
        catch(error){
            throw error
        }
    };

    public async create(dto: CreateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.repository.create(product);
        }
        catch(error){
            throw error
        }
    };

    public async update(dto: UpdateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.repository.update(product);
        }
        catch(error){
            throw error
        }
    };

    public async delete(dto: DeleteProductDTO) {
        try {
            return await this.repository.delete(dto.id);
        }
        catch(error){
            throw error
        }
    };

}