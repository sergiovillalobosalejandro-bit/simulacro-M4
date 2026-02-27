import { patientRepository } from './patient.repository.js';

export const patientService = {

  async getAllPatients() {
    return await patientRepository.findAll();
  },

  async createPatient(data) {
    return await patientRepository.create(data);
  }

};