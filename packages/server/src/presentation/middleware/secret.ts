import { NextFunction, Request, Response } from "express";
import { ErrorType } from "../../domain";
import { env } from "../../config";

export class SecretValidator {

    static async validate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            const secret = req.headers.authorization as string;

            if (!secret) {
                res.status(401).json({ error: ErrorType.Unauthorized });
                return;
            }

            if (secret !== env.SECRET_KEY) {
                res.status(401).json({ error: ErrorType.Unauthorized });
                return;
            }

            next();
        }
        catch (error) {
            res.status(401).json({ error: ErrorType.Unauthorized });
        }
    }
}