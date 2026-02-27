import { Router } from 'express';
import { getPatients } from './patient.controller.js';

const router = Router();

router.get('/', getPatients);

export default router;