var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Services } from '../models/services.model.js';
import { Booking } from '../models/booking.model.js';
export function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Sync the models with the database
            yield Services.sync({ force: true });
            yield Booking.sync({ force: true });
            // Seed Services
            const services = yield Services.findAll();
            // Seed initial data for Services
            if (services.length === 0) {
                yield Services.bulkCreate([
                    { name: 'Haircut' },
                    { name: 'Spa' },
                    { name: 'Massage' },
                ]);
                console.log('Services seeded');
            }
            else {
                console.log('Services already exist');
            }
            // Optionally seed bookings if needed
            const bookings = yield Booking.findAll();
            if (bookings.length === 0) {
                yield Booking.create({
                    serviceId: 1,
                    customer_name: 'John Doe',
                    customer_email: 't9NlP@example.com',
                    customer_phone: '1234567890',
                    booking_date: new Date(),
                    notes: 'First booking',
                });
                console.log('Booking seeded');
            }
            else {
                console.log('Bookings already exist');
            }
            console.log('Database initialized and seeded successfully!');
        }
        catch (error) {
            console.error('Error initializing database:', error);
        }
    });
}
