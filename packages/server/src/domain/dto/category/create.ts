import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class CreateCategoryDTO {
    private constructor(
        public name: string,
    ){}

    static create(data: {[key: string]: any}): [string?, CreateCategoryDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.name])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.name])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new CreateCategoryDTO(
                data.name,
            )
        ];
    }

};