/*
  Warnings:

  - You are about to drop the `Benefit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BenefitTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobTranslation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BenefitTranslation" DROP CONSTRAINT "BenefitTranslation_benefitId_fkey";

-- DropForeignKey
ALTER TABLE "JobTranslation" DROP CONSTRAINT "JobTranslation_jobId_fkey";

-- DropTable
DROP TABLE "Benefit";

-- DropTable
DROP TABLE "BenefitTranslation";

-- DropTable
DROP TABLE "Job";

-- DropTable
DROP TABLE "JobTranslation";

-- CreateTable
CREATE TABLE "benefit" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "benefit_translation" (
    "id" SERIAL NOT NULL,
    "benefitId" INTEGER NOT NULL,
    "language" VARCHAR(5) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "benefit_translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "skills" TEXT[],
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_translation" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "language" VARCHAR(5) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "experience" VARCHAR(100) NOT NULL,

    CONSTRAINT "job_translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "benefit_translation_benefitId_language_key" ON "benefit_translation"("benefitId", "language");

-- CreateIndex
CREATE UNIQUE INDEX "job_translation_jobId_language_key" ON "job_translation"("jobId", "language");

-- AddForeignKey
ALTER TABLE "benefit_translation" ADD CONSTRAINT "benefit_translation_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_translation" ADD CONSTRAINT "job_translation_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
