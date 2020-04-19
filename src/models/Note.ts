import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './User';

@Table
export default class Note extends Model<Note> {

  @Column 
  content !: string;

  @ForeignKey(() => User) 
  @Column 
  userId !: number;
  
  @BelongsTo(() => User) 
  user !: User;
  
}