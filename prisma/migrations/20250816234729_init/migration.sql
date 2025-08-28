/*
  Warnings:

  - You are about to drop the column `benefitId` on the `benefit_translation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[benefit_id,language]` on the table `benefit_translation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `benefit_id` to the `benefit_translation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "benefit_translation" DROP CONSTRAINT "benefit_translation_benefitId_fkey";

-- DropIndex
DROP INDEX "benefit_translation_benefitId_language_key";

-- AlterTable
ALTER TABLE "benefit_translation" DROP COLUMN "benefitId",
ADD COLUMN     "benefit_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "benefit_translation_benefit_id_language_key" ON "benefit_translation"("benefit_id", "language");

-- AddForeignKey
ALTER TABLE "benefit_translation" ADD CONSTRAINT "benefit_translation_benefit_id_fkey" FOREIGN KEY ("benefit_id") REFERENCES "benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
