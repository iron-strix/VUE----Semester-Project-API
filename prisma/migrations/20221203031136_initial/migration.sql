-- CreateTable
CREATE TABLE "Form" (
    "formId" TEXT NOT NULL,
    "owner" TEXT,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "body" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("formId")
);

-- CreateTable
CREATE TABLE "FormResponse" (
    "formResponseId" TEXT NOT NULL,
    "owner" TEXT,
    "parentFormId" TEXT NOT NULL,
    "replies" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormResponse_pkey" PRIMARY KEY ("formResponseId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_parentFormId_fkey" FOREIGN KEY ("parentFormId") REFERENCES "Form"("formId") ON DELETE RESTRICT ON UPDATE CASCADE;
