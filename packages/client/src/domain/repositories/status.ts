import { StatusEntity } from '../entities/status';

export abstract class StatusRepositoryI {
    abstract findAll(): Promise<StatusEntity[]>;
    abstract findById(id: string): Promise<StatusEntity | null>;
}