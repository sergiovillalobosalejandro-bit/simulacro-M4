import { patientService } from './patient.service.js';

export const getPatients = async (req, res, next) => {
  try {
    const patients = await patientService.getAllPatients();
    res.json(patients);
  } catch (error) {
    next(error);
  }
};

export const createPatient = async (req, res, next) => {
  try {
    const newPatient = await patientService.createPatient(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    next(error);
  }
};