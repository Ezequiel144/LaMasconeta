/*
  Warnings:

  - You are about to drop the column `postId` on the `Behavior` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Behavior" DROP CONSTRAINT "Behavior_postId_fkey";

-- AlterTable
ALTER TABLE "Behavior" DROP COLUMN "postId";
