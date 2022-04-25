// HERANÇAS

// Exercicio 1

// a) Apenas se ela tivesse atribuida a um setor

// b) Apenas uma vez


// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;

//     constructor(id: string, email: string, name: string, password: string) {
//         console.log("Chamando o construtor da classe User")
//         this.id = id;
//         this.email = email;
//         this.name = name;
//         this.password = password;
//     }
//     public getId(): string { 
//         return this.id;
//     }

//     public getName(): string { 
//         return this.name;
//     }

//     public getEmail(): string { 
//         return this.email;
//     }

//     public introduceYourself(): string {
//         return `Olá, sou ${this.name} bom dia!`
//     }
// }

// const user1 = new User("01", "email@email.com", "Gledson", "123456")

// console.log(user1.getId())
// console.log(user1.getName())
// console.log(user1.getEmail())


// Exercicio 2

// a) Apenas uma vez

// b) Duas. Uma foi da classe user e outra na Customer, pois a classe customer está pegando infos do constructor da classe User.

// class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;
  
//     constructor(
//       id: string,
//       email: string,
//       name: string,
//       password: string,
//       creditCard: string
//     ) {
//       super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }
//   }

// const customer1 = new Customer("02", "email222@email.com", "Lucas", "123456", "500")

// Exercicio 3

// a) Não pois password é um atributo privado, apenas colocando um metodo get dentro da classe User


// console.log(customer1.getId())
// console.log(customer1.getEmail())
// console.log(customer1.getName())
// console.log(customer1.purchaseTotal)
// console.log(customer1.getCreditCard())



// Exercicio 4

// public introduceYourself(): string {
//     return `Olá, sou ${this.name} bom dia!`
// }

//const user1 = new User("01", "email@email.com", "Gledson", "123456")

// user1.introduceYourself()


// Exercicio 5

//  public introduceYourself(): string {
//     return `Olá, sou ${this.name} bom dia!`
// }



// POLIMORFISMO

// Exercicio 1

// a) Todas. Não. Creio que porque é um objeto e é facil ter acesso as suas informacoes

export interface Client {
    name: string;  
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const client: Client = {
    name: "Gledson",
    registrationNumber: 1,
    consumedEnergy: 500,

    calculateBill: () => {
        return 2;
    }

}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

// Exercicio 2

// a) "Não é possível criar uma instância de uma classe abstrata."

// b) Criar uma classe filha.

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
}

// Exercicio 3

// a)  para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// b) Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

// c) Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

export class Residence extends Place {
    constructor(
      private residentsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
    getResidentsQuantity(): number {
        return this.residentsQuantity;
    }
  }

  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      cep: string) {
      super(cep);
    }
    getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
  }

  export class Industry extends Place {
    constructor(
      private machinesQuantity: number, 
      cep: string) {
          super(cep);
    }
    getMachinesQuantity(): number {
        return this.machinesQuantity;
    }
  }

// Exercicio 4

// a) metodo getCpf para pegar o cpf pois ele é privado e calculateBill para calcular a conta de luz.

class ResidentialClient extends Residence implements Client {

    constructor(
        public name: string, 
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        cep: string,
        residentsQuantity: number,
        ){
        super(residentsQuantity, cep)
        }
    
    getCpf(): string {
        return this.cpf 
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.75
    }
}

// Exercicio 5

// a) As duas tem como implements o client, e o constructor são quase todos iguais

// b) A residential é cpf e na comercial é cpnj elas são filhas de pais diferente e o valor que é calculado o consumo de energia
// é diferente 

class CommercialClient  extends Commerce implements Client {

    constructor(
        public name: string, 
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        cep: string,
        machinesQuantity: number,
        ){
        super(machinesQuantity, cep)
        }
    
    getCnpj(): string {
        return this.cnpj 
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.53
    }
}

// Exercicio 6

// a) Da classe Industry, pois é um cliente industruial então é lógico ser filha da classe Industry.

// b) IndustryNumber que é o numero de registro, para indentificação, iguais como: cpf ou cnpj.

// c) Pois apenas o  numero de resgitro ta privado e ele é um valor fixo.

class IndustrialClient extends Industry implements Client {

    constructor(
        public name: string, 
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string,
        cep: string,
        machinesQuantity: number,
        ){
        super(machinesQuantity, cep)
        }
    
    getInsdustryNumber(): string {
        return this.insdustryNumber 
    }


    calculateBill(): number{
        return this.consumedEnergy * 0.53
    }
}