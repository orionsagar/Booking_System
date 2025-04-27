import { Services } from '../models/services.model.js';
import { Booking } from '../models/booking.model.js';

export async function initializeDatabase() {
    try {
        // Sync the models with the database
        await Services.sync({ force: true });
        await Booking.sync({ force: true });    

        // Seed Services
        const services = await Services.findAll();

        // Seed initial data for Services
        if (services.length === 0) {
            await Services.bulkCreate([
              { name: 'Haircut' },
              { name: 'Spa' },
              { name: 'Massage' },
            ]);
            console.log('Services seeded');
          } else {
            console.log('Services already exist');
          }

        // Optionally seed bookings if needed
        const bookings = await Booking.findAll();
        if (bookings.length === 0) {
          await Booking.create({
            serviceId: 1,
            customer_name: 'John Doe',
            customer_email: 't9NlP@example.com',
            customer_phone: '1234567890',
            booking_date: new Date(),
            notes: 'First booking',
          });
          console.log('Booking seeded');
        } else {
          console.log('Bookings already exist');
        }

        console.log('Database initialized and seeded successfully!');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}