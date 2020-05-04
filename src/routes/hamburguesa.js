import { Router } from 'express';
const router = Router();

import { getHamburguesa, createHamburguesa, getOneHamburguesa, deleteHamburguesa, updateHamburguesa } from  '../controllers/hamburguesa.controller';
router.get('/', getHamburguesa);
router.post('/', createHamburguesa);
router.delete('/:id', deleteHamburguesa);
router.get('/:id', getOneHamburguesa);
router.patch('/:id', updateHamburguesa)

export default router;