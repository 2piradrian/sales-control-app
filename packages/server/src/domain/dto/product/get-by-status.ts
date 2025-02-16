import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class GetProductsByStatusDTO {
    private constructor(
        public statusId: string,
    ){}

    static create(data: {[key: string]: any}): [string?, GetProductsByStatusDTO?] {
        Sanitizer.trimStrings(data);
        
        if (!TypeChecker.areDefined([data.statusId])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.statusId])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new GetProductsByStatusDTO(
                data.statusId
            )
        ];
    }

};