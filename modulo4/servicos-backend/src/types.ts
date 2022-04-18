export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type TypeAddress = {
   logradouro: string
   bairro: string
   localidade: string
   uf: string
}

export type Address = {
   id: string
   cep: string
   numero: string
   complemento: string
   logradouro: string | undefined
   bairro: string | undefined
   cidade: string | undefined
   estado: string | undefined
}