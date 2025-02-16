import { CreateProductDTO, DeleteProductDTO, GetProductByIdDTO, GetProductsByCategoryDTO, GetProductsByStatusDTO, ProductEntity, UpdateProductDTO } from "../../../domain";
import { ProductRepository_I } from "../../../infrastructure";

export class ProductService {
    constructor(
        private readonly repository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.repository.findAll();
        }
        catch(error){
            throw error
        }
    }

    public async getById(dto: GetProductByIdDTO) {
        try {
            return await this.repository.findById(dto.id);
        }
        catch(error){
            throw error
        }
    };

    public async getByCategory(dto: GetProductsByCategoryDTO) {
        try {
            return await this.repository.findByCategory(dto.categoryId);
        }
        catch(error){
            throw error
        }
    };

    public async getByStatus(dto: GetProductsByStatusDTO) {
        try {
            return await this.repository.findByStatus(dto.statusId);
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