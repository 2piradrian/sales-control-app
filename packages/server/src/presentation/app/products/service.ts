import { CreateProductDTO, DeleteProductDTO, ErrorHandler, ErrorType, GetProductByIdDTO, GetProductsByCategoryDTO, GetProductsByStatusDTO, ProductEntity, UpdateProductDTO } from "../../../domain";
import { ProductRepository_I } from "../../../infrastructure";

export class ProductService {
    constructor(
        private readonly productsRepository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.productsRepository.findAll();
        }
        catch(error){
            throw error
        }
    }

    public async getById(dto: GetProductByIdDTO) {
        try {
            const product = await this.productsRepository.findById(dto.id);
            
            if (!product) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }

            return product;
        }
        catch(error){
            throw error
        }
    };

    public async getByCategory(dto: GetProductsByCategoryDTO) {
        try {
            return await this.productsRepository.findByCategory(dto.categoryId);
        }
        catch(error){
            throw error
        }
    };

    public async getByStatus(dto: GetProductsByStatusDTO) {
        try {
            return await this.productsRepository.findByStatus(dto.statusId);
        }
        catch(error){
            throw error
        }
    };

    public async create(dto: CreateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);

            return await this.productsRepository.create(product);
        }
        catch(error){
            throw error
        }
    };

    public async update(dto: UpdateProductDTO) {
        try {
            const product = ProductEntity.fromObject(dto);
            const productExists = await this.productsRepository.findById(product.id!);

            if (!productExists) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }

            return await this.productsRepository.update(product);
        }
        catch(error){
            throw error
        }
    };

    public async delete(dto: DeleteProductDTO) {
        try {
            const productExists = await this.productsRepository.findById(dto.id);

            if (!productExists) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }
            
            return await this.productsRepository.delete(dto.id);
        }
        catch(error){
            throw error
        }
    };

}