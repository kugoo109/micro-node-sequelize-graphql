import Note from "../models/Note";
import { CreateNoteType } from './../types/notes';

export const create = async function(note: CreateNoteType) {
  return Note.create({
    content: note.content,
    userId: note.userId,
  });
};

export const list = async function() { 
  return Note.findAll();
};
