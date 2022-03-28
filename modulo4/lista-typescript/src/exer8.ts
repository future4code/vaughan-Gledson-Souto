//Exercicio 8

const renovacaoCarteira = (nascimento: string, carteira: string) => {
    const separarNacimento = nascimento.split('/')
    const separarCarteira = carteira.split('/')
    
    const anoNascimento: number = Number(separarNacimento[2])
    const anoCarteira: number = Number(separarCarteira[2])
    
    if(anoCarteira - anoNascimento <= 20){
        return true
    }else if(anoCarteira - anoNascimento === 20 || anoNascimento - anoCarteira <= 50){
        return true
    }else if (anoCarteira - anoNascimento > 50){
        return true
    }else{
        return false
    }
    
    }
    console.log(renovacaoCarteira(process.argv[2], process.argv[3]))