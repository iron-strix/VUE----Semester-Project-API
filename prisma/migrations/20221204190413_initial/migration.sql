/*
  Warnings:

  - The `replies` column on the `FormResponse` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FormResponse" DROP COLUMN "replies",
ADD COLUMN     "replies" JSONB;
