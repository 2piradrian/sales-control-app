import { NextFunction, Request, Response } from "express";
import { ErrorType } from "../../domain";

export class SecretValidator {

    static async validate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            const secret = req.headers.authorization as string;

            if (!secret) {
                res.status(401).json({ error: ErrorType.Unauthorized });
                return;
            }

            if (secret !== process.env.SECRET) {
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