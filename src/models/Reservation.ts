import { uuid } from 'uuidv4';

class Reservation {
    id: string;

    provider: string;

    date: Date;

    constructor({ provider, date }: Omit<Reservation, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Reservation;
