/*
  Warnings:

  - Made the column `name` on table `Form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `body` on table `Form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `replies` on table `FormResponse` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Form" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "body" SET NOT NULL;

-- AlterTable
ALTER TABLE "FormResponse" ALTER COLUMN "replies" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
