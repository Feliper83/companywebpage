/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanyTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanyTranslation" DROP CONSTRAINT "CompanyTranslation_company_id_fkey";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "CompanyTranslation";

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "address" TEXT,
    "logoUrl" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_transalation" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "language" CHAR(2) NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT,
    "description" TEXT,

    CONSTRAINT "company_transalation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_transalation_company_id_language_key" ON "company_transalation"("company_id", "language");

-- AddForeignKey
ALTER TABLE "company_transalation" ADD CONSTRAINT "company_transalation_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
