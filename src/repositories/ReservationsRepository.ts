import { isEqual } from 'date-fns';
import Reservation from '../models/Reservation';

// Data Transfer Object

interface CreateReservationDTO {
    provider: string;
    date: Date;
}

class ReservationsRepository {
    private reservations: Reservation[];

    constructor() {
        this.reservations = [];
    }

    public all(): Reservation[] {
        return this.reservations;
    }

    public findByDate(date: Date): Reservation | null {
        const findReservation = this.reservations.find(reservation =>
            isEqual(date, reservation.date),
        );

        return findReservation || null;
    }

    public create({ provider, date }: CreateReservationDTO): Reservation {
        const reservation = new Reservation({ provider, date });

        this.reservations.push(reservation);

        return reservation;
    }
}

export default ReservationsRepository;
