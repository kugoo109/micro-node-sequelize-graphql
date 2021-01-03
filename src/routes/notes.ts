import { Router } from 'express';
import { LoginAccess } from '../policies/auth';
import { asyncErrorHandler } from '../core/middlewares/errorHandler';
import { UserDto } from './../models/User';
import * as NoteController from '../controllers/notes';

const router = Router();
  
router.get('', LoginAccess, asyncErrorHandler(async function (req, res) {
  const notes = await NoteController.find();

  res.json(notes);
}));

router.post('', LoginAccess, asyncErrorHandler(async function (req, res) {
  const note = req.body;
  const user = req.user as UserDto;

  const createdNote = await NoteController.create({
    ...note,
    userId: user.id
  });

  res.json(createdNote);

}));

router.get('/:noteId', LoginAccess, asyncErrorHandler(async function (req, res) {
  const noteId = req.params.noteId;
  
  const note = await NoteController.findById(noteId);
  
  res.json(note);

}));

export default router;
