export type TypeExtrato = {
    valor: number,
    data: string,
    descricao: string
}
export type TypeUsuarios = {
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    extrato: TypeExtrato[]
}


export const usuarios: TypeUsuarios[] = [
    {
        nome: "Gledson",
        cpf: 12345678901,
        dataNascimento: "16/04/2001",
        saldo: 0.00,
        extrato: [
            {
                valor: 0,
                data: "",
                descricao: ""
            }
        ]
    }
]