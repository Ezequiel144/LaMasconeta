/*
  Warnings:

  - You are about to drop the column `postId` on the `AdoptionInfo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AdoptionInfo" DROP CONSTRAINT "AdoptionInfo_postId_fkey";

-- DropIndex
DROP INDEX "AdoptionInfo_postId_key";

-- AlterTable
ALTER TABLE "AdoptionInfo" DROP COLUMN "postId";
