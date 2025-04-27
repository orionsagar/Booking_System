import { Router } from 'express';
import { createBooking } from '../controllers/booking.controller.js';
import { validateBooking } from '../middlewares/validateBooking.middleware.js';

const router = Router();

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Create a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBookingDto'
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Bad request
 */
router.post('/bookings', validateBooking, createBooking);

export default router;