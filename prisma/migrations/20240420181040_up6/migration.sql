/*
  Warnings:

  - You are about to drop the `EnumBehavior` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostToEnumBehavior" DROP CONSTRAINT "PostToEnumBehavior_enumBehaviorId_fkey";

-- DropTable
DROP TABLE "EnumBehavior";

-- CreateTable
CREATE TABLE "Behavior" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Behavior_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_enumBehaviorId_fkey" FOREIGN KEY ("enumBehaviorId") REFERENCES "Behavior"("id") ON DELETE SET NULL ON UPDATE CASCADE;
