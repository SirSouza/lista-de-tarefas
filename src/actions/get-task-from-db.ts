"use server" /* toda função que busca informações do banco de dados precisa ser declarada */

import { prisma } from "@/utils/prisma";





export const getTasks = async () => {
  try {
    const tasks = await prisma.tasks.findMany() /* Busca as informações no banco de dados */

  if (!tasks) return 
  console.log(tasks)
  return tasks /* Retorna as informações que poderam ser chamadas em outra função */
  }

  catch (error) {
    throw error
  }
}