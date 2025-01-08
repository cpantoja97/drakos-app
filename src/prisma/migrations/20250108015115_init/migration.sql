-- CreateEnum
CREATE TYPE "NationalIdType" AS ENUM ('CC', 'NIT');

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "nationalIdType" "NationalIdType" NOT NULL,
    "nationalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_nationalId_key" ON "Client"("nationalId");
