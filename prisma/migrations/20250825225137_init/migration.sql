/*
  Warnings:

  - You are about to drop the column `jobId` on the `job_translation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[job_id,language]` on the table `job_translation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `job_id` to the `job_translation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "job_translation" DROP CONSTRAINT "job_translation_jobId_fkey";

-- DropIndex
DROP INDEX "job_translation_jobId_language_key";

-- AlterTable
ALTER TABLE "job_translation" DROP COLUMN "jobId",
ADD COLUMN     "job_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "job_translation_job_id_language_key" ON "job_translation"("job_id", "language");

-- AddForeignKey
ALTER TABLE "job_translation" ADD CONSTRAINT "job_translation_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
