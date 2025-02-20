import { Request, Response } from "express";
import { ProductService } from "./service";
import { CreateProductDTO, DeleteProductDTO, ErrorHandler, GetProductByIdDTO, GetProductsByCategoryDTO, GetProductsByStatusDTO, UpdateProductDTO } from "../../../domain";

export class ProductController {
    constructor(
        private readonly productService: ProductService
    ){}

    getAll = (req: Request, res: Response) => {
        this.productService.getAll()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    getById = (req: Request, res: Response) => {
        const [error, dto] = GetProductByIdDTO.create(req.params);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.productService.getById(dto!)
        .then((product) => res.status(200).json(product))
        .catch(error => ErrorHandler.handle(error, req, res));
    };  

    getByCategory = (req: Request, res: Response) => {
        const [error, dto] = GetProductsByCategoryDTO.create(req.query);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.productService.getByCategory(dto!)
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    getByStatus = (req: Request, res: Response) => {
        const [error, dto] = GetProductsByStatusDTO.create(req.query);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.productService.getByStatus(dto!)
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    create = (req: Request, res: Response) => {
        const [error, dto] = CreateProductDTO.create(req.body);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.productService.create(dto!)
        .then(() => res.status(201).send())
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    update = (req: Request, res: Response) => {
        const [error, dto] = UpdateProductDTO.create(req.body);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.productService.update(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    delete = (req: Request, res: Response) => {
        const [error, dto] = DeleteProductDTO.create(req.query);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.productService.delete(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, req, res));
    };

}