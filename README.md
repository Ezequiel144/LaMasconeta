# Descripción


## Correr en dev

1. Instalar las dependencias ```npm install```.
2. Levantar la base de datos ```docker compose up -d```.
3. Cambiar el nombre del archivo .env.example a .env
4. Comentar la URL_BASE de supabase del .env y descomentar la de local
5. Correr las migraciones de Prisma ```npx prisma migrate dev -n [nombre que quiera]```
6. Generar prima ```npx prisma generate```
7. Limpiar el localStorage del navegador/Cookies.
8. Correr el proyecto ```npm run dev```.

## Correr en prod
1. Instalar las dependencias ```npm install```.
2. Generar prima ```npx prisma generate```
3. Limpiar el localStorage del navegador/Cookies.
4. Correr el proyecto ```npm run dev```.

