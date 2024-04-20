-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "role" "Role" NOT NULL DEFAULT 'user',
    "image" TEXT,
    "phone" TEXT,
    "gender" "Gender",
    "postalCode" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "photos" TEXT,
    "weight" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HowDelivered" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "HowDelivered_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostToHowDelivered" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "howDeliveredId" TEXT,

    CONSTRAINT "PostToHowDelivered_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnumBehavior" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "EnumBehavior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostToEnumBehavior" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "enumBehaviorId" TEXT,

    CONSTRAINT "PostToEnumBehavior_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToHowDelivered" ADD CONSTRAINT "PostToHowDelivered_howDeliveredId_fkey" FOREIGN KEY ("howDeliveredId") REFERENCES "HowDelivered"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToHowDelivered" ADD CONSTRAINT "PostToHowDelivered_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_enumBehaviorId_fkey" FOREIGN KEY ("enumBehaviorId") REFERENCES "EnumBehavior"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostToEnumBehavior" ADD CONSTRAINT "PostToEnumBehavior_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
