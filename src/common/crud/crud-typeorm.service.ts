import { CrudService } from './crud-service.interface';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CrudTypeOrmService<T> implements CrudService<T> {

  constructor(protected readonly repository: Repository<T>) {}

  async getOne(id: number): Promise<T> {
    const entity = await this.repository.findOne(id);
    if (!entity) {
      throw new NotFoundException();
    }
    return Promise.resolve(entity);
  }

  async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async create(entity: T): Promise<T> {
    if (!entity || typeof entity !== 'object') {
      throw new BadRequestException();
    }
    try {
      return await this.repository.save(entity as any);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async save(entity: T): Promise<T> {
    return await this.create(entity);
  }

  async update(id: number, entity: T) {
    return await this.repository.update(id, entity as any);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
