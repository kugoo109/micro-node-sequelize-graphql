import { Model, Table, Column, HasMany, PrimaryKey, Default, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { ObjectType, Field, Int, Authorized, Float } from "type-graphql";
import User from './User';

@ObjectType()
@Table
export default class Note extends Model<Note> {

  @Field(type => Int)
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;
  
  @Field()
  @Column 
  content!: string;

  @Field(type => Int)
  @ForeignKey(() => User) 
  @Column 
  userId!: number;
  
  @Field(type => User)
  @BelongsTo(() => User) 
  user!: User;

  @Field()
  @CreatedAt
  createdAt!: Date;

  @Field()
  @UpdatedAt
  updatedAt!: Date;
}