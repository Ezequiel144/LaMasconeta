/*
  Warnings:

  - You are about to drop the `Species` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `species` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_speciesId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "species" "EnumSpecies" NOT NULL;

-- DropTable
DROP TABLE "Species";
