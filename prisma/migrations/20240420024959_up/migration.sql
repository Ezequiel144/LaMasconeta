/*
  Warnings:

  - You are about to drop the `Behavior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BehaviorOnPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeliveryMethod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeliveryMethodOnPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BehaviorOnPost" DROP CONSTRAINT "BehaviorOnPost_behaviorId_fkey";

-- DropForeignKey
ALTER TABLE "BehaviorOnPost" DROP CONSTRAINT "BehaviorOnPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryMethod" DROP CONSTRAINT "DeliveryMethod_postId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryMethodOnPost" DROP CONSTRAINT "DeliveryMethodOnPost_deliveryId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryMethodOnPost" DROP CONSTRAINT "DeliveryMethodOnPost_postId_fkey";

-- DropTable
DROP TABLE "Behavior";

-- DropTable
DROP TABLE "BehaviorOnPost";

-- DropTable
DROP TABLE "DeliveryMethod";

-- DropTable
DROP TABLE "DeliveryMethodOnPost";
