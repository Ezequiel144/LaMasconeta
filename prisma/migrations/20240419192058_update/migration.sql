-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "HowDelivered" AS ENUM ('vacunado', 'certificado_de_salud', 'desparasitado', 'esterilizado', 'otro');

-- CreateEnum
CREATE TYPE "EnumBehavior" AS ENUM ('amigable', 'timido', 'curioso', 'tranquilo', 'jugueton', 'leal', 'docil', 'inteligente', 'afectuoso', 'obediente', 'feliz', 'energetico', 'paciente', 'adaptable', 'alerta', 'sensible');

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

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
    "countryId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "age" INTEGER NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "phone" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "photos" TEXT[],
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "speciesId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Species" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Behavior" (
    "id" TEXT NOT NULL,
    "name" "EnumBehavior" NOT NULL,

    CONSTRAINT "Behavior_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BehaviorPost" (
    "id" TEXT NOT NULL,
    "behaviorId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "BehaviorPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthCondition" (
    "id" TEXT NOT NULL,
    "condition" TEXT NOT NULL,

    CONSTRAINT "HealthCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostHealthCondition" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "healthConditionId" TEXT NOT NULL,

    CONSTRAINT "PostHealthCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryOption" (
    "id" TEXT NOT NULL,
    "howDelivered" "HowDelivered" NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "DeliveryOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_speciesId_fkey" FOREIGN KEY ("speciesId") REFERENCES "Species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehaviorPost" ADD CONSTRAINT "BehaviorPost_behaviorId_fkey" FOREIGN KEY ("behaviorId") REFERENCES "Behavior"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BehaviorPost" ADD CONSTRAINT "BehaviorPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostHealthCondition" ADD CONSTRAINT "PostHealthCondition_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostHealthCondition" ADD CONSTRAINT "PostHealthCondition_healthConditionId_fkey" FOREIGN KEY ("healthConditionId") REFERENCES "HealthCondition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryOption" ADD CONSTRAINT "DeliveryOption_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
