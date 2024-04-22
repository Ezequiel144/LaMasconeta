-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "Species" AS ENUM ('perro', 'gato', 'conejo', 'pajaro', 'pez', 'hamster', 'cobayo', 'reptil', 'huron', 'erizo', 'tortuga', 'caballo', 'cerdo', 'cabra', 'otro');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "role" "Role" NOT NULL DEFAULT 'user',
    "image" TEXT,
    "phone" TEXT,
    "gender" "Gender",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "photos" TEXT,
    "weight" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "species" "Species" NOT NULL,
    "userId" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HowDelivered" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HowDelivered_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostToHowDelivered" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "howDeliveredId" TEXT,

    CONSTRAINT "PostToHowDelivered_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Behavior" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Behavior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostToEnumBehavior" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "enumBehaviorId" TEXT,

    CONSTRAINT "PostToEnumBehavior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToHowDelivered" ADD CONSTRAINT "PostToHowDelivered_howDeliveredId_fkey" FOREIGN KEY ("howDeliveredId") REFERENCES "HowDelivered"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToHowDelivered" ADD CONSTRAINT "PostToHowDelivered_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_enumBehaviorId_fkey" FOREIGN KEY ("enumBehaviorId") REFERENCES "Behavior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
