//2)
type TypeUsers = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

type TypePost = {
    id: number,
    title: string,
    body: string,
    userId: number
}
//3)
export const users: TypeUsers[] = [
    {
        id: 1,
        name: "Gledson",
        phone: 12345678,
        email: "nosdelg@gmail.com",
        website: "www.gledson.com.br"
    },
    {
        id: 2,
        name: "Lucas",
        phone: 40028922,
        email: "lucas@gmail.com",
        website: "www.lucas.com.br"
    },
    {
        id: 3,
        name: "Medina",
        phone: 87654321,
        email: "medina@gmail.com",
        website: "www.medina.com.br"
    },
    {
        id: 4,
        name: "Souto",
        phone: 12348765,
        email: "souto@gmail.com",
        website: "www.souto.com.br"
    },

]
// Acho melhor criar fora pois fica mais organizado e facil acesso
//6
export const posts: TypePost[] = [
        {
            id: 1,
            title: "De hoje ta pago",
            body: "(foto de alguém na academia)",
            userId: 1
        },
        {
            id: 2,
            title: "Quem gosta de café",
            body: "eu amo café, curte quem ama tambem",
            userId: 2
        },
        {
            id: 3,
            title: "",
            body: "ta ta ta ",
            userId: 3
        },
        {
            id: 4,
            title: "só oi",
            body: "oi oi oi oi",
            userId: 4
        },
]