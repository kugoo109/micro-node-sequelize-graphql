import Note, { NoteDto } from "../models/Note";
import User from "../models/User";
import { CreateNoteType } from '../types/notes';
import * as Transform from "../core/utils/transform";

interface INoteRepository {
  create(note: CreateNoteType): Promise<NoteDto>;
  find(params?: object): Promise<NoteDto[]>;
  findOne(params?: object): Promise<NoteDto>;
}

class NoteRepository implements INoteRepository {

  create(note: CreateNoteType): Promise<NoteDto> {
    return Transform.toClass(NoteDto, 
      Note.create(note)
    );
  }

  find(params?: object): Promise<NoteDto[]> {
    return Transform.arrayToClass(NoteDto, 
      Note.findAll({ 
        where: {
          ...params
        }, 
        include: [ User ]
      })
    );
  }

  findOne(params?: object): Promise<NoteDto> {
    return Transform.toClass(NoteDto, 
      Note.findOne({ 
        where: {
          ...params
        }, 
        include: [ User ] 
      })
    );
  }
}

export default new NoteRepository();