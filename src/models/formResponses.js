import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getFormResponses = async () => database.FormResponse.findMany()

export const getFormResponse = async (id) =>
  database.FormResponse.findUnique({
    where: { formResponseId: id },
    include: {
      parentForm: true,
    },
  })

export const addFormResponse = async (response) =>
  database.FormResponse.create({
    data: { ...response },
  })

export const updateFormResponse = async (id, response) =>
  database.FormResponse.update({
    where: {
      formResponseId: id,
    },
    data: { ...response },
  })

export const deleteFormResponse = async (id) =>
  database.FormResponse.delete({
    where: {
      formResponseId: id,
    },
  })
