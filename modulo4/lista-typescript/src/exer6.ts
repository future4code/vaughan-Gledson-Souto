type TypeClientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const saldoClientes: TypeClientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const calcularEmprestimo = (saldos: TypeClientes[]): TypeClientes[] => {
    const mapDebitos = saldos.map((cliente: TypeClientes)=> {
    const total: number = cliente.debitos.reduce((total: number, currentElement: number) => total + currentElement, 0) 
    return{
        ...cliente,
        saldoTotal: cliente.saldoTotal - total,
        debitos: []
    }
    }).filter((cliente: TypeClientes)=>{
    return cliente.saldoTotal < 0
})
 return mapDebitos
}

console.log(calcularEmprestimo(saldoClientes))