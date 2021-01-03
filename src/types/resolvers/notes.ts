import { NoteDto } from './../../models/Note';
import { Field, ArgsType } from "type-graphql";

@ArgsType()
export class CreateNoteArgs implements Partial<NoteDto> {
  @Field()
  content!: string;
}
