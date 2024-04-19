-- DropForeignKey
ALTER TABLE "HealthCondition" DROP CONSTRAINT "HealthCondition_postId_fkey";

-- AlterTable
ALTER TABLE "HealthCondition" ALTER COLUMN "postId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "HealthCondition" ADD CONSTRAINT "HealthCondition_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
