import { Sanitizer, TypeChecker } from "../../../config";
import { ErrorType } from "../../error/error-types";

export class CreateProductDTO {
    private constructor(
        public name: string,
        public description: string,
        public stock: number,
        public stockAlert: number,
        public price: number,
        public categoryId: string,
        public statusId: string,
    ){}

    static create(data: {[key: string]: any}): [string?, CreateProductDTO?] {
        Sanitizer.trimStrings(data);

        if (!TypeChecker.areDefined([data.name, data.description, data.stock, data.stockAlert, data.price, data.categoryId, data.statusId])) {
            return [ErrorType.MissingFields];
        }

        if (!TypeChecker.areDefined([data.description])) {
            data.description = '';
        }

        if (!TypeChecker.areNumbers([data.price]) || data.price <= 0) {
            return [ErrorType.InvalidFields];
        }
        data.price = parseFloat(data.price);

        if (!TypeChecker.areNumbers([data.stock, data.stockAlert]) || data.stock < 0 || data.stockAlert < 0) {
            return [ErrorType.InvalidFields];
        }
        data.stock = parseInt(data.stock);
        data.stockAlert = parseInt(data.stockAlert);

        if (!TypeChecker.areStrings([data.name, data.description, data.categoryId, data.statusId])) {
            return [ErrorType.InvalidFields];
        }

        return [
            undefined, 
            new CreateProductDTO(
                data.name, 
                data.description, 
                data.stock, 
                data.stockAlert, 
                data.price, 
                data.categoryId, 
                data.statusId
            )
        ];
    }

};