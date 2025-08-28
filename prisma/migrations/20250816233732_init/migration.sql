/*
  Warnings:

  - You are about to drop the `benefits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "benefits";

-- DropTable
DROP TABLE "jobs";

-- CreateTable
CREATE TABLE "Benefit" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BenefitTranslation" (
    "id" SERIAL NOT NULL,
    "benefitId" INTEGER NOT NULL,
    "language" VARCHAR(5) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "BenefitTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "skills" TEXT[],
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobTranslation" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "language" VARCHAR(5) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "experience" VARCHAR(100) NOT NULL,

    CONSTRAINT "JobTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BenefitTranslation_benefitId_language_key" ON "BenefitTranslation"("benefitId", "language");

-- CreateIndex
CREATE UNIQUE INDEX "JobTranslation_jobId_language_key" ON "JobTranslation"("jobId", "language");

-- AddForeignKey
ALTER TABLE "BenefitTranslation" ADD CONSTRAINT "BenefitTranslation_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "Benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobTranslation" ADD CONSTRAINT "JobTranslation_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
