import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class UpdateCategoryDTO {
    private constructor(
        public id: string,
        public name: string,
    ){}

    static create(data: {[key: string]: any}): [string?, UpdateCategoryDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.id, data.name])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.id, data.name])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new UpdateCategoryDTO(
                data.id,
                data.name,
            )
        ];
    }

};