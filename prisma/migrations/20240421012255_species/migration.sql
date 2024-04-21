/*
  Warnings:

  - You are about to drop the column `species` on the `Post` table. All the data in the column will be lost.
  - Added the required column `speciesId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumSpecies" AS ENUM ('perro', 'gato', 'conejo', 'pajaro', 'pez', 'hamster', 'cobayo', 'reptil', 'huron', 'erizo', 'tortuga', 'caballo', 'cerdo', 'cabra', 'otro');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "species",
ADD COLUMN     "speciesId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Species";

-- CreateTable
CREATE TABLE "Species" (
    "id" TEXT NOT NULL,
    "name" "EnumSpecies" NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
