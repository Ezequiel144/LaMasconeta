/*
  Warnings:

  - You are about to drop the column `countryId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "countryId";

-- CreateTable
CREATE TABLE "Behavior" (
    "id" TEXT NOT NULL,
    "name" "EnumBehavior" NOT NULL,

    CONSTRAINT "Behavior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BehaviorOnPost" (
    "postId" TEXT NOT NULL,
    "behaviorId" TEXT NOT NULL,

    CONSTRAINT "BehaviorOnPost_pkey" PRIMARY KEY ("postId","behaviorId")
);

-- CreateTable
CREATE TABLE "DeliveryMethod" (
    "id" TEXT NOT NULL,
    "name" "HowDelivered" NOT NULL,
    "postId" TEXT,

    CONSTRAINT "DeliveryMethod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryMethodOnPost" (
    "postId" TEXT NOT NULL,
    "deliveryId" TEXT NOT NULL,

    CONSTRAINT "DeliveryMethodOnPost_pkey" PRIMARY KEY ("postId","deliveryId")
);

-- AddForeignKey
ALTER TABLE "BehaviorOnPost" ADD CONSTRAINT "BehaviorOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehaviorOnPost" ADD CONSTRAINT "BehaviorOnPost_behaviorId_fkey" FOREIGN KEY ("behaviorId") REFERENCES "Behavior"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryMethod" ADD CONSTRAINT "DeliveryMethod_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryMethodOnPost" ADD CONSTRAINT "DeliveryMethodOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryMethodOnPost" ADD CONSTRAINT "DeliveryMethodOnPost_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "DeliveryMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
