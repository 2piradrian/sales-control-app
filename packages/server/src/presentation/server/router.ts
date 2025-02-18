import { Router } from "express";
import { ProductRoutes } from "../app/products/routes";
import { CategoryRoutes } from "../app/categories/routes";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use("/api/products", ProductRoutes.routes);

        router.use("/api/categories", CategoryRoutes.routes);

        return router;
    }
}