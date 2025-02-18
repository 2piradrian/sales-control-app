import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class DeleteCategoryDTO {
    private constructor(
        public id: string,
    ){}

    static create(data: {[key: string]: any}): [string?, DeleteCategoryDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.id])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.id])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new DeleteCategoryDTO(
                data.id
            )
        ];
    }

};