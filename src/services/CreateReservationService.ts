import { startOfHour } from 'date-fns';
import Reservation from '../models/Reservation';
import ReservationsRepository from '../repositories/ReservationsRepository';

/**
 * [x] Recebimento das informações
 * [x] Tratativa de erros/exceções
 * [x] Acesso ao repositório
 */

// DTO
interface Request {
    provider: string;
    date: Date;
}

/**
 * SOLID
 * Single Responsability Principle
 * Dependency Inversion Principle
 */

// O service tem que ter uma única responsabilidade
// DRY: Don't repeat yourself
class CreateReservationService {
    private reservationsRepository: ReservationsRepository;

    constructor(reservationsRepository: ReservationsRepository) {
        this.reservationsRepository = reservationsRepository;
    }

    public execute({ date, provider }: Request): Reservation {
        // Regra de negócio
        const reservationDate = startOfHour(date);

        const findReservationInSameDate =
            this.reservationsRepository.findByDate(reservationDate);

        if (findReservationInSameDate) {
            throw Error('This reservation is already booked');
        }

        const reservation = this.reservationsRepository.create({
            provider,
            date: reservationDate,
        });

        return reservation;
    }
}

export default CreateReservationService;
