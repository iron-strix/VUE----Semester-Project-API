import { PrismaClient } from '@prisma/client'

const database = new PrismaClient()
// use `database` in your application to read and write data in your DB

export const getUsers = async () => database.User.findMany()

export const getUser = async (id) =>
  database.User.findUnique({ where: { userUUID: id } })

export const addUser = async (userData) =>
  database.User.create({ data: { ...userData } })

export const updateUser = async (id, userData) => {
  const user = await getUser(id)
  if (user) {
    return database.User.update({
      where: { userUUID: id },
      data: { ...userData, updatedAt: new Date() },
    })
  }
  return null
}

export const deleteUser = async (id) =>
  database.User.delete({ where: { userUUID: id } })
