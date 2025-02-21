import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class GetStatusByIdDTO {
    private constructor(
        public id: string,
    ){}

    static create(data: {[key: string]: any}): [string?, GetStatusByIdDTO?] {
        Sanitizer.trimStrings(data);
        
        if (!TypeChecker.areDefined([data.id])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areStrings([data.id])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new GetStatusByIdDTO(
                data.id
            )
        ];
    }

};