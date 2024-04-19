/*
  Warnings:

  - You are about to drop the `DeliveryOption` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `delivery` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DeliveryOption" DROP CONSTRAINT "DeliveryOption_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "delivery" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "DeliveryOption";
