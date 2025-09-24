## Descripcion

Este proyecto es una API de ecommerce desarrollada en Node.js con express, mongoDB y swagger para documentacion. Incluye autenticacion con JWT, autorizacion por roles y codigo basico para carritos y tickets de compra

## Ejecutar con Docker

1. Clonar el repositorio
2. Construir la imagen:
   ```bash
   docker build -t miusuario/mi-backend .

## levantar los servicios con docker compose

    docker compose up --build

// docker-compose levanta la app y una base de datos Mongo.
// no tengo instalado docker pero se puede subir la imagen a dockerhub. comandos:
// docker build -t tuusuario/tuimagen .
// docker push tuusuario/tuimagen

