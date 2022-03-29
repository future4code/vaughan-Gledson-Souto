//2)
type TypeTasks = {
    userId: number | string,
    id: number | string,
    title: string,
    completed: boolean
}
//3)
export const tasks: TypeTasks[] = [
    {
        userId: 1,
        id: 1,
        title: "Limpar a casa",
        completed: false
      },
      {
        userId: 2,
        id: 2,
        title: "Fazer atividades escolares",
        completed: true
      },
      {
        userId: 3,
        id: 3,
        title: "Passear com o cachorro",
        completed: false
      },
      {
        userId: 4,
        id: 4,
        title: "Arrumar o quarto",
        completed: true
      },

]