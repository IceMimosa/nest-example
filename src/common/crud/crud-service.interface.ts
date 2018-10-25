/**
 * CRUD 基础接口
 */
export interface CrudService<T> {
  getOne(id: number): Promise<T>;
  getAll(): Promise<T[]>;

  save(entity: T): Promise<T>;
  create(entity: T): Promise<T>;

  update(id: number, entity: T);

  delete(id: number);
}