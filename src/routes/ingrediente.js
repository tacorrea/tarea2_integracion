import { Router } from 'express';
const router = Router();

import { getIngrediente, createIngrediente, getOneIngrediente, deleteIngrediente } from  '../controllers/ingrediente.controller';
// /api/projects/
router.get('/', getIngrediente);
router.post('/', createIngrediente);
router.get('/:id', getOneIngrediente);
router.delete('/:id', deleteIngrediente);

export default router;


