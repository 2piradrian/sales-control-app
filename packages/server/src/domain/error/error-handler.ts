import { Request, Response } from "express";
import { ErrorType } from "./error-types";

export class ErrorHandler extends Error {

    constructor(
        public readonly statusCode: number,
        public readonly message: string
    ) {
        super(message);
    }

    static handle = (error: unknown, req: Request, res: Response ) => {
        
        console.error(error);

        if (error instanceof ErrorHandler) {
            res.status(error.statusCode).json({ error: error.message });
            return;
        }
        
        res.status(500).json({ error: ErrorType.InternalError });
    }

}