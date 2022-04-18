// Exercicio 1

// a) Usamos o constructor para passar os valores para os atributos da classe

// b) Apenas uma vez

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
    
    public getCpf(): string {
        return this.cpf;
    }
    public setCpf(cpf: string){
        this.cpf = cpf;
    }


    public getName(): string {
        return this.name;
    }
    public setName(name: string){
        this.name = name;
    }


    public getAge(): number {
        return this.age;
    }
    public setAge(age: number){
         this.age = age;
    }

    public getBalance(): number {
        return this.balance;
    }
    public setBalance(balance: number){
         this.balance = balance;
    }

    constructor(cpf: string, name: string, age: number) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
}
const constructor1 = new UserAccount ("11111111111", "Gledson", 21);

console.log(constructor1);

constructor1.setName("Lucas");

console.log(constructor1);



// c) com os metodos getters e setters


// Exercicio 2

class Transaction  {
    private description: string;
    private value: number;
    private date: string;

    public getDescription(): string {
        return this.description;
    }
    public setDescription(description: string) {
        this.description = description;
    }


    public getValue(): number {
        return this.value;
    }
    public setValue(value: number) {
        this.value = value;
    }


    public getDate(): string {
        return this.date;
    }
    public setDate(date: string) {
         this.date = date;
    }

    constructor(description: string, value: number, date: string) {
       this.description = description;
       this.value = value;
       this.date = date;
    }
}

// Exercicio 3

class Bank {
    private accounts: UserAccount[];

    getAccount(): UserAccount[]{
        return this.accounts;
    }

    constructor(accounts: UserAccount[]){
        this.accounts = accounts;
    }
}