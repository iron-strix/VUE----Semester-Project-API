import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getForms = async () => database.Form.findMany()

export const getForm = async (id) =>
  database.Form.findUnique({
    where: { formId: id },
    include: {
      owner: true,
    },
  })

export const addForm = async (body) =>
  database.Form.create({ data: { ...body } })

export const updateForm = async (id, body) =>
  database.Form.update({
    where: {
      formId: id,
    },
    data: {
      ...body,
    },
  })

export const deleteForm = async (id) => {
  database.Form.delete({
    where: {
      formId: id,
    },
  })
}
