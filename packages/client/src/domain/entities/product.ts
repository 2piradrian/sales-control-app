export class ProductEntity {

    private constructor(
        public id: string | undefined,
        public name: string,
        public description: string,
        public stock: number,
        public stockAlert: number,
        public price: number,
        public categoryId: string,
        public statusId: string,
        public createdAt: Date | undefined,
        public updatedAt: Date | undefined,
    ){}

    static fromObject(object: {[key: string]: any}): ProductEntity {

        return new ProductEntity(
            object.id,
            object.name,
            object.description,
            object.stock,
            object.stockAlert,
            object.price,
            object.categoryId,
            object.statusId,
            object.createdAt,
            object.updatedAt
        );
        
    }
}