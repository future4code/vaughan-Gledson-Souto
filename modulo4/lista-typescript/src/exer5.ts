//Exercicio 5

type TypeUsers = {
    name: string,
    email: string, 
    role: string
}
const usersAll: TypeUsers[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const filterAdm = (users: TypeUsers[] ) => {
const filter = users.filter((f)=>{
    return f.role === "admin"
})
console.table(filter)
}

filterAdm(usersAll)