export class StatusEntity {

    private constructor(
        public id: string | undefined,
        public name: string,
        public createdAt: Date,
        public updatedAt: Date
    ){}

    static fromObject(object: {[key: string]: any}): StatusEntity {

        return new StatusEntity(
            object.id,
            object.name,
            object.created_at,
            object.updated_at
        );
        
    }
    
}