-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_ownerId_fkey";

-- AlterTable
ALTER TABLE "Form" ALTER COLUMN "ownerId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "FormResponse" ALTER COLUMN "ownerId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userUUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userUUID") ON DELETE RESTRICT ON UPDATE CASCADE;
