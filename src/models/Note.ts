import { Model, Table, Column, HasMany, PrimaryKey, Default, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, AutoIncrement } from 'sequelize-typescript';
import { ObjectType, Field, Int, Authorized, Float } from "type-graphql";
import { Type } from 'class-transformer';
import User, { UserDto } from "./User";

@ObjectType("Note")
export class NoteDto {

  @Field(type => Int)
  id!: number;
  
  @Field()
  content!: string;

  @Field(type => Int)
  userId!: number;
  
  @Field(type => UserDto, { nullable: true })
  @Type(() => UserDto)
  user?: UserDto;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

@Table
export default class Note extends Model<Note> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;
  
  @Column 
  content!: string;

  @ForeignKey(() => User) 
  @Column 
  userId!: number;
  
  @BelongsTo(() => User) 
  user!: User;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
