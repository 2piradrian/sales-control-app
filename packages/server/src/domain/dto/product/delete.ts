import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class DeleteProductDTO {
    private constructor(
        public id: string,
    ){}

    static create(data: {[key: string]: any}): [string?, DeleteProductDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.id])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.id])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new DeleteProductDTO(
                data.id
            )
        ];
    }

};