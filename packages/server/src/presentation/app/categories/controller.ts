import { Request, Response } from "express";
import { CategoryService } from "./service";
import { CreateCategoryDTO, DeleteCategoryDTO, ErrorHandler, GetCategoryByIdDTO, UpdateCategoryDTO } from "../../../domain";

export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ){}

    getAll = (req: Request, res: Response) => {
        this.categoryService.getAll()
        .then((products) => res.status(200).json(products))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    getById = (req: Request, res: Response) => {
        const [error, dto] = GetCategoryByIdDTO.create(req.query);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.categoryService.getById(dto!)
        .then((product) => res.status(200).json(product))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    create = (req: Request, res: Response) => {
        const [error, dto] = CreateCategoryDTO.create(req.body);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.categoryService.create(dto!)
        .then(() => res.status(201).send())
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    update = (req: Request, res: Response) => {
        const [error, dto] = UpdateCategoryDTO.create(req.body);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.categoryService.update(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    delete = (req: Request, res: Response) => {
        const [error, dto] = DeleteCategoryDTO.create(req.query);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.categoryService.delete(dto!)
        .then(() => res.status(204).send())
        .catch(error => ErrorHandler.handle(error, req, res));
    };

}