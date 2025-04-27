var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { sequelize } from './config/db.config.js';
import serviceRoutes from './routes/service.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.config.js';
import { initializeDatabase } from './seeders/initialseeder.js'; // Import the seed function
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1', serviceRoutes);
app.use('/api/v1', bookingRoutes);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.sync({ force: false, alter: true }); // Syncs the models to the database
            console.log('Database synced.');
            // Run the seed function
            yield initializeDatabase();
            app.listen(PORT, () => {
                console.log(`Server running at http://localhost:${PORT}`);
                console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
startServer();
