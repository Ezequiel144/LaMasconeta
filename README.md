# Descripción


## Correr en dev

1. Instalar las dependencias ```npm install```.
2. Levantar la base de datos ```docker compose up -d```.
3. Correr las migraciones de Prisma ```npx prisma migrate dev -n [nombre que quiera]```
4. Generar prima ```npx prisma generate```
5. Ejecutar el seed ```npm run seed```.
6. Limpiar el localStorage del navegador/Cookies.
7. Correr el proyecto ```npm run dev```.

## Correr en prod

## Para migrar
Dar de baja en npm
1. Correr las migraciones de Prisma ```npx prisma migrate dev -n [nombre que quiera]```
2. Generar prima ```npx prisma generate```
3. Ejecutar el seed ```npm run seed```.
4. Correr el proyecto ```npm run dev```.
5. Limpiar el localStorage del navegador/Cookies.