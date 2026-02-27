import express from 'express';
import patientRoutes from './modules/patients/patient.routes.js';

const app = express();

app.use('/patients', patientRoutes);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' });
});

export default app;