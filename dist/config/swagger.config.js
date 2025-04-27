import swaggerJSDoc from 'swagger-jsdoc';
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Booking API',
            version: '1.0.0',
            description: 'API documentation for Booking System',
            contact: {
                name: 'Developer',
                email: 'developer@example.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
            },
        ],
    },
    apis: ['src/routes/*.ts', 'src/dtos/*.ts'], // Scan these files for documentation
};
export const swaggerSpec = swaggerJSDoc(swaggerOptions);
