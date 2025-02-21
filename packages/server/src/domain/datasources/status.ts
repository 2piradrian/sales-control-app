import { StatusEntity } from '../entities/status';

export abstract class StatusDataSource {
    abstract findAll(): Promise<StatusEntity[]>;
    abstract findById(id: string): Promise<StatusEntity | null>;
}