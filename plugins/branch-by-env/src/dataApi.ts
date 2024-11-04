import { Router } from 'express';
import sequelize from '../backend/database';
import { QueryTypes } from 'sequelize';

const router = Router();

router.get('/data', async (_, res) => {
    try {
        const results = await sequelize.query('SELECT * FROM repo', { type: QueryTypes.SELECT });
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

export default router;
