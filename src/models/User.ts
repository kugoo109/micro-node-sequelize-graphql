import { Model, Table, Column, HasMany, PrimaryKey, Default, DataType, CreatedAt, UpdatedAt, AutoIncrement } from 'sequelize-typescript';
import { ObjectType, Field, Int, Authorized, Float } from "type-graphql";
import { Type } from 'class-transformer';

@ObjectType("User")
export class UserDto {
  
  @Field(type => Int)
  id!: number;
  
  @Field()
  email!: string;

  @Field()
  username!: string;

  @Field()
  password!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

@Table
export default class User extends Model<User> {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;
  
  @Column 
  email!: string;

  @Column
  username!: string;

  @Column
  password!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
