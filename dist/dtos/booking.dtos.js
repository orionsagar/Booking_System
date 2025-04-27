/**
 * @swagger
 * components:
 *   schemas:
 *     CreateBookingDto:
 *       type: object
 *       required:
 *         - serviceId
 *         - customer_name
 *         - booking_time
 *       properties:
 *         serviceId:
 *           type: integer
 *           example: 1
 *         customer_name:
 *           type: string
 *           example: John Doe
 *         customer_email:
 *           type: string
 *           example: JohnDoe@gmail.com
 *         customer_phone:
 *           type: string
 *           example: 012345678
 *         booking_date:
 *           type: string
 *           format: date-time
 *           example: 2025-05-01T10:00:00Z
 *         notes:
 *           type: string
 *           example: notes about the booking
 */
export {};
