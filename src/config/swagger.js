import path from "path";
import { fileURLToPath } from "url";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
        title: "API Backend Testing",
        description: "Documentación de la API con Swagger",
        },
    },
    apis: [path.join(__dirname, "../docs/**/*.yaml")], 
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, swaggerSpecs };


