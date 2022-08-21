import { Router } from 'express';
import { parseISO } from 'date-fns';

import ReservationsRepository from '../repositories/ReservationsRepository';
import CreateReservationService from '../services/CreateReservationService';

const reservationsRouter = Router();
const reservationsRepository = new ReservationsRepository();

// SoC: Separation of Concerns (Separação de preocupações)
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

reservationsRouter.get('/', (request, response) => {
    const Reservations = reservationsRepository.all();

    return response.json(Reservations);
});

reservationsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date);

        const createReservation = new CreateReservationService(
            reservationsRepository,
        );

        const reservation = createReservation.execute({
            date: parsedDate,
            provider,
        });

        return response.json(reservation);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default reservationsRouter;
