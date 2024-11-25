/*
  Warnings:

  - You are about to drop the column `description` on the `Item` table. All the data in the column will be lost.
  - Added the required column `issuer` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `netValue` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalValueTaxes` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "description",
ADD COLUMN     "issuer" TEXT NOT NULL,
ADD COLUMN     "netValue" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "totalValueTaxes" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
