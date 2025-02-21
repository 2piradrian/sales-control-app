import { Router } from "express";
import { SecretValidator } from "../../middleware/secret";
import { StatusService } from "./service";
import { StatusController } from "./controller";

export class CategoryRoutes {
    static get routes(): Router {
                            
        const router = Router()
        const service = new StatusService()
        const controller = new StatusController(service)

        router.get("/get-all", [SecretValidator.validate], controller.getAll);
        
        router.get("/get-by-id", [SecretValidator.validate], controller.getById);

        return router
    }
}