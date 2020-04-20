import { Model, Table, Column, HasMany, PrimaryKey, Default, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { ObjectType, Field, Int, Authorized, Float } from "type-graphql";
import Note from './Note';

@ObjectType()
@Table
export default class User extends Model<User> {
  
  @Field(type => Int)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: number;
  
  @Field()
  @Column 
  email!: string;

  @Field()
  @Column
  username!: string;

  @Field()
  @Column
  password!: string;

  @Field()
  @CreatedAt
  createdAt!: Date;

  @Field()
  @UpdatedAt
  updatedAt!: Date;
}
