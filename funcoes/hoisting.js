function teste (){
    console.log("teste")
}

teste()



// o hoisting apenas funciona quando estamos chamando uma função que foi declarada, quando estamos falando de atribuição de variável, como estamos vendo aqui em baixo, o mesmo só pode ser chamado após o codificador ler aquela atribuição que foi dada, diferentemente da função declarada, que por ser hosting, você pode chamar antes da função que vai funcionar normalmente. A mesma coisa também acontece no uso do let e do const na declaração de váriaveis, mas o Var funciona o hosting.

const teste = function teste (){
    console.log("teste")
}

teste()
console.log(minhaVar)
var minhaVar = "variável"

