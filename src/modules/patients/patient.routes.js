import { Router } from 'express';
import { getPatients, createPatient } from './patient.controller.js';

const router = Router();

router.get('/', getPatients);
router.post('/', createPatient);

export default router;