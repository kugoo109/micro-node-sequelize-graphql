import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import Note from './Note';

@Table
export default class User extends Model<User> {

  @Column 
  email !: string;

  @Column
  username !: string;

  @Column
  password !: string;

  @HasMany(() => Note) 
  notes ?: Note[];

}