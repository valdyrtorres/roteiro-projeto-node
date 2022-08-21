import { Router } from 'express';
import reservationsRouter from './reservations.routes';

const routes = Router();

// define rota raiz
routes.use('/reservations', reservationsRouter);

export default routes;
