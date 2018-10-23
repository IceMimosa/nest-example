import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * User model
 */
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
