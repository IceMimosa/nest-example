import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CrudTypeOrmService } from 'common/crud/crud-typeorm.service';

@Injectable()
export class UserService extends CrudTypeOrmService<User> {
  constructor(
    @InjectRepository(User)
    protected readonly repository: Repository<User>,
  ) {
    super(repository);
  }
}
