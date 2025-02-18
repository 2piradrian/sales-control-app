export class CategoryEntity {

    private constructor(
        public id: string | undefined,
        public name: string,
        public createdAt: Date,
        public updatedAt: Date
    ){}

    static fromObject(object: {[key: string]: any}): CategoryEntity {

        return new CategoryEntity(
            object.id,
            object.name,
            object.created_at,
            object.updated_at
        );
        
    }
    
}