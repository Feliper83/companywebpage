/*
  Warnings:

  - You are about to drop the `company_transalation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company_transalation" DROP CONSTRAINT "company_transalation_company_id_fkey";

-- DropTable
DROP TABLE "company_transalation";

-- CreateTable
CREATE TABLE "company_translation" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "language" CHAR(2) NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT,
    "description" TEXT,

    CONSTRAINT "company_translation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_translation_company_id_language_key" ON "company_translation"("company_id", "language");

-- AddForeignKey
ALTER TABLE "company_translation" ADD CONSTRAINT "company_translation_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
