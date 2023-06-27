import { Router } from 'express';
import {  getPersons, getPerson,deletePerson,postPerson,updatePerson } from '../controllers/persona';

const router = Router();

router.get('/', getPersons);
router.get('/:id', getPerson);
router.delete('/:id', deletePerson);
router.post('/', postPerson);
router.put('/:id', updatePerson);

export default router;