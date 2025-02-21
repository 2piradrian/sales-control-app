import { Request, Response } from "express";
import { StatusService } from "./service";
import { ErrorHandler, GetStatusByIdDTO } from "../../../domain";

export class StatusController {
    constructor(
        private readonly statusService: StatusService
    ){}

    getAll = (req: Request, res: Response) => {
        this.statusService.getAll()
        .then((statuses) => res.status(200).json(statuses))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

    getById = (req: Request, res: Response) => {
        const [error, dto] = GetStatusByIdDTO.create(req.query);

        if (error) {
            ErrorHandler.handle(error, req, res);
        }

        this.statusService.getById(dto!)
        .then((status) => res.status(200).json(status))
        .catch(error => ErrorHandler.handle(error, req, res));
    };

}