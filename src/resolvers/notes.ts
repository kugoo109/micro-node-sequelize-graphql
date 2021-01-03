import { LoginAccess } from '../policies/graphql/auth';
import { NoteDto } from './../models/Note';
import { AuthenticatedContext } from './../types/resolvers';
import { CreateNoteArgs } from './../types/resolvers/notes';
import { Resolver, Mutation, Query, Field, ArgsType, Args, Ctx, UseMiddleware } from "type-graphql";
import * as NoteController from "../controllers/notes";

@Resolver()
export class NoteResolver {

  @Query(() => [NoteDto])
  @UseMiddleware(LoginAccess)
  async allNotes(@Ctx() context: AuthenticatedContext) {
    return await NoteController.find();
  }

  @Mutation(() => NoteDto)
  @UseMiddleware(LoginAccess)
  async createNote(@Args() note: CreateNoteArgs, @Ctx() context: AuthenticatedContext) {
    return await NoteController.create({
      ...note,
      userId: context.user.id
    });
  }
}