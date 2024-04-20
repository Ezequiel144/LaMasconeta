/*
  Warnings:

  - You are about to drop the column `description` on the `Behavior` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `HowDelivered` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Behavior" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "HowDelivered" DROP COLUMN "description";

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);
