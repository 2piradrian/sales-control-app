import { ProductModel } from "../../data";
import { ErrorType, ProductDataSource, ProductEntity } from "../../domain";

export class PostgresqlProductDataSource implements ProductDataSource {

    public async findAll(): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.findAll();

            return products.map(product => ProductEntity.fromObject(product)) || [];
        }
        catch(error){
            throw error
        }
    };

    public async findById(id: string): Promise<ProductEntity | null> {
        try {
            const product = await ProductModel.findOne({ where: { id: id } });

            if (!product) {
                throw ErrorType.NotFound;
            }

            return ProductEntity.fromObject(product);
        }
        catch(error){
            throw error
        }
    };

    public async findByCategory(categoryId: string): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.findAll({ where: { categoryId: categoryId } });

            return products.map(product => ProductEntity.fromObject(product)) || [];
        }
        catch(error){
            throw error
        }
    };

    public async findByStatus(statusId: string): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.findAll({ where: { statusId: statusId } });

            return products.map(product => ProductEntity.fromObject(product)) || [];
        }
        catch(error){
            throw error
        }
    };

    public async create(product: ProductEntity): Promise<ProductEntity> {
        try {
            const productModel = new ProductModel({
                ...product,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            await productModel.save();

            return ProductEntity.fromObject(productModel);
        }
        catch(error){
            throw error
        }
    };

    public async update(product: ProductEntity): Promise<ProductEntity> {
        try {
            const productModel = await ProductModel.findOne({ where: { id: product.id } });

            if (!productModel) {
                throw ErrorType.NotFound;
            }

            const productFromDB = ProductEntity.fromObject(productModel);
            const updatedProduct = {
                ...productFromDB, 
                ...product,
                createdAt: productFromDB.createdAt,
            };

            productModel.set(updatedProduct);

            await productModel.save();

            return ProductEntity.fromObject(productModel);
        }
        catch(error){
            throw error
        }
    };

    public async delete(id: string): Promise<void> {
        try {
            await ProductModel.destroy({ where: { id: id } });
        }
        catch(error){
            throw error
        }
    };
    
}