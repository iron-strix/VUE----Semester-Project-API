/*
  Warnings:

  - You are about to drop the column `owner` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `FormResponse` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `FormResponse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "owner",
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "FormResponse" DROP COLUMN "owner",
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
