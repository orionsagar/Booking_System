import { Router } from 'express';
import { getServices } from '../controllers/service.controller.js';
const router = Router();
/**
 * @swagger
 * /services:
 *   get:
 *     summary: Fetch all available services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: List of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.get('/services/providers', getServices);
export default router;
