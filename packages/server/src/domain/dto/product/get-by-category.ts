import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class GetProductsByCategoryDTO {
    private constructor(
        public categoryId: string,
    ){}

    static create(data: {[key: string]: any}): [string?, GetProductsByCategoryDTO?] {
        Sanitizer.trimStrings(data);
        
        if (!TypeChecker.areDefined([data.categoryId])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.categoryId])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new GetProductsByCategoryDTO(
                data.categoryId
            )
        ];
    }

};