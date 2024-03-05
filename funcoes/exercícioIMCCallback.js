/* Classificação IMC
IMC

Muito abaixo do peso 16 a 16,9 kg/m2

Abaixo do peso 17 a 18,4 kg/m2

Peso normal 18,5 a 24,9 kg/m2

Acima do peso 25 a 29,9 kg/m2

Obesidade Grau I 30 a 34,9 kg/m2

Obesidade Grau II 35 a 40 kg/m2

Obesidade Grau III maior que 40 kg/m2 */

function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error ("Need two parameters: weight and height")
    }
    return peso / (altura * altura)
}
function classificaIMC(imc){
    if(imc <= 16.9){
        return `Você possui o IMC de ${imc}, que indica que você está muito abaixo do peso`;
    }else if(imc <= 18.4){
        return `Você possui o IMC de ${imc}, que indica que você está abaixo do peso`;
    }else if(imc <= 24.9){
        return `Você possui o IMC de ${imc}, que indica que você está normal`;
    }else if(imc <= 29.9){
        return `Você possui o IMC de ${imc}, que indica que você está acima do peso`;
    }else if(imc <= 34.9){
        return `Você possui o IMC de ${imc}, que indica Obesidade Grau I`;
    }else if(imc <= 40){
        return `Você possui o IMC de ${imc}, que indica Obesidade Grau II`;
    } else{
        return `Você possui o IMC de ${imc}, que indica Obesidade Grau III`;
    }
    
}

let imc = calcularIMC(80, 1.65)
let imc2 = calcularIMC(60, 1.65, classificaIMC())


