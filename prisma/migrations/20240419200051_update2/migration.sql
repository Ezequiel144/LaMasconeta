/*
  Warnings:

  - You are about to drop the column `countryId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `delivery` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `speciesId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `vaccinated` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Behavior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BehaviorPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HealthCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostHealthCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Species` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BehaviorPost" DROP CONSTRAINT "BehaviorPost_behaviorId_fkey";

-- DropForeignKey
ALTER TABLE "BehaviorPost" DROP CONSTRAINT "BehaviorPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_countryId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_speciesId_fkey";

-- DropForeignKey
ALTER TABLE "PostHealthCondition" DROP CONSTRAINT "PostHealthCondition_healthConditionId_fkey";

-- DropForeignKey
ALTER TABLE "PostHealthCondition" DROP CONSTRAINT "PostHealthCondition_postId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_countryId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "countryId",
DROP COLUMN "delivery",
DROP COLUMN "speciesId",
DROP COLUMN "vaccinated",
ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "photos" DROP NOT NULL,
ALTER COLUMN "photos" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Behavior";

-- DropTable
DROP TABLE "BehaviorPost";

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "HealthCondition";

-- DropTable
DROP TABLE "PostHealthCondition";

-- DropTable
DROP TABLE "Species";
