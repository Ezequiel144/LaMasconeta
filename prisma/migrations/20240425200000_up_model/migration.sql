-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "ListSpecies" AS ENUM ('perro', 'gato', 'conejo', 'pajaro', 'pez', 'hamster', 'cobayo', 'reptil', 'huron', 'erizo', 'tortuga', 'caballo', 'cerdo', 'cabra', 'otro');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('little', 'medium', 'big');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "Adoption" AS ENUM ('adoption', 'adopted');

-- CreateEnum
CREATE TYPE "Activity" AS ENUM ('low', 'mid', 'high');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "image" TEXT,
    "phone" TEXT,
    "gender" "Gender",
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "complaints" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'other',
    "statusAdoption" "Adoption" NOT NULL DEFAULT 'adoption',
    "activity" "Activity" NOT NULL DEFAULT 'mid',
    "birthdate" TEXT NOT NULL,
    "age" DOUBLE PRECISION NOT NULL,
    "phone" DOUBLE PRECISION NOT NULL,
    "history" TEXT NOT NULL,
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "weight" DOUBLE PRECISION NOT NULL,
    "size" "Size" NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "complaints" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,

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
CREATE TABLE "Diseases" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Diseases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostToDiseases" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "enumDiseasesId" TEXT,

    CONSTRAINT "PostToDiseases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToHowDelivered" ADD CONSTRAINT "PostToHowDelivered_howDeliveredId_fkey" FOREIGN KEY ("howDeliveredId") REFERENCES "HowDelivered"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToHowDelivered" ADD CONSTRAINT "PostToHowDelivered_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_enumBehaviorId_fkey" FOREIGN KEY ("enumBehaviorId") REFERENCES "Behavior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToDiseases" ADD CONSTRAINT "PostToDiseases_enumDiseasesId_fkey" FOREIGN KEY ("enumDiseasesId") REFERENCES "Diseases"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToDiseases" ADD CONSTRAINT "PostToDiseases_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
