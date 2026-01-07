"use server"
import { prisma } from "@/utils/prisma"

export const deleteTask = async (idTask: string) => {
  try {
    if(!idTask) return

    const deletedTaks = await prisma.tasks.delete({
      where: {
        id: idTask
      }
    })

    if(!deletedTaks) return
    return deletedTaks
  }
  catch(error) {
    throw error
  }
}