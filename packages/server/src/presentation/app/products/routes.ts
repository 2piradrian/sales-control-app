import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "./service";
import { SecretValidator } from "../../middleware/secret";

export class ProductRoutes {
    static get routes(): Router {
                            
        const router = Router()
        const service = new ProductService()
        const controller = new ProductController(service)

        router.get("/get-all", [SecretValidator.validate], controller.getAll);

        router.get("/get-by-id/:id", [SecretValidator.validate], controller.getById);

        router.get("/get-by-category", [SecretValidator.validate], controller.getByCategory);

        router.get("/get-by-status", [SecretValidator.validate], controller.getByStatus);

        router.post("/create", [SecretValidator.validate], controller.create);

        router.put("/update", [SecretValidator.validate], controller.update)
        
        router.delete("/delete", [SecretValidator.validate], controller.delete)

        return router
    }
}