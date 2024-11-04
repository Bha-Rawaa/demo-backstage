import express from 'express';
import dataApi from '../src/dataApi';

export const createRouter = async () => {
  const router = express.Router();
  router.use('/api/database', dataApi);
  console.log('Data API route added at /api/database/data');
  
  return router;
};
export default createRouter;
