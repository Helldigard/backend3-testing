// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
        title: "API Backend Testing",
        description: "Documentación de la API con Swagger",
        },
    },
    apis: ["./docs/**/*.yaml"], // doc YAML
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, swaggerSpecs };

