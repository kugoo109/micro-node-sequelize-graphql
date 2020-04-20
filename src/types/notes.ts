import { Field, ObjectType } from "type-graphql";
import Note from "../models/Note";

export type CreateNoteType = {
  content: string;
  userId: number;
}
