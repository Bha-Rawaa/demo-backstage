import { Router } from 'express';
import dataApi from '../src/dataApi'; 

export  async function createRouter(): Promise<Router> {
    const router = Router();
    router.use('/database', dataApi); 
    return router;
}
export default createRouter;