import { NoteDto } from './../models/Note';
import NoteRepository from "../repositories/NoteRepository";
import { CreateNoteType } from './../types/notes';

export async function create (note: CreateNoteType) {
  return NoteRepository.create(note);
};

export async function find () { 
  return NoteRepository.find();
};

export async function findById (id: string) { 
  return NoteRepository.findOne({ id });
};
