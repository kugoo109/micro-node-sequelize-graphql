import { Resolver, Mutation, Query, Field, ArgsType, Args, Ctx } from "type-graphql";
import Note from "../models/Note";
import * as NoteController from "../controllers/notes";
import { Context } from './../types/users';

@ArgsType()
class CreateNoteArgs implements Partial<Note> {
  @Field()
  content!: string;
}

@Resolver()
export class NoteResolver {

  @Query(() => [Note])
  async allNotes(@Ctx() context: Context) {
    return await NoteController.list();
  }

  @Mutation(() => Note)
  async createNote(@Args() note: CreateNoteArgs, @Ctx() context: Context) {
    return await NoteController.create({
      ...note,
      userId: context.user.id
    });
  }
}