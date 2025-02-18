import { CategoryEntity, CreateCategoryDTO, DeleteCategoryDTO, ErrorHandler, ErrorType, GetCategoryByIdDTO, UpdateCategoryDTO } from "../../../domain";
import { CategoryRepository_I, ProductRepository_I } from "../../../infrastructure";

export class CategoryService {
    constructor(
        private readonly categoriesRepository = new CategoryRepository_I(),
        private readonly productsRepository = new ProductRepository_I()
    ){}

    public async getAll() {
        try {
            return await this.categoriesRepository.findAll()
        }
        catch(error){
            throw error
        }
    }

    public async getById(dto: GetCategoryByIdDTO) {
        try {
            const category = await this.categoriesRepository.findById(dto.id);
            
            if (!category) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }

            return category;
        }
        catch(error){
            throw error
        }
    };

    public async create(dto: CreateCategoryDTO) {
        try {
            const category = CategoryEntity.fromObject(dto);

            return await this.categoriesRepository.create(category);
        }
        catch(error){
            throw error
        }
    };

    public async update(dto: UpdateCategoryDTO) {
        try {
            const category = CategoryEntity.fromObject(dto);
            const categoryExists = await this.categoriesRepository.findById(category.id!);

            if (!categoryExists) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }

            return await this.categoriesRepository.update(category);
        }
        catch(error){
            throw error
        }
    };

    public async delete(dto: DeleteCategoryDTO) {
        try {
            const categoryExists = await this.categoriesRepository.findById(dto.id);

            if (!categoryExists) {
                throw new ErrorHandler(404, ErrorType.NotFound);
            }

            const usedBy = await this.productsRepository.findByCategory(dto.id);
            if (usedBy.length > 0) {
                throw new ErrorHandler(400, ErrorType.Conflict);
            }

            return await this.categoriesRepository.delete(dto.id);
        }
        catch(error){
            throw error
        }
    };

}