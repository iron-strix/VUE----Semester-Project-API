/*
  Warnings:

  - A unique constraint covering the columns `[userUUID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_userUUID_key" ON "User"("userUUID");
