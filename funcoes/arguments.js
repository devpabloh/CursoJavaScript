function somar (){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

/* a variável arguments é uma array-like object (objeto similar a uma array) que contém todos os argumentos passados para uma função. Ela permite que você acesse os argumentos de uma função, independentemente do número de argumentos definidos formalmente na declaração da função. Isso é especialmente útil quando você não sabe quantos argumentos serão passados para a função. */


// quando precisar ter acesso a uma função do array like object, não use arrow function, que vai dar erro

const Subtrair = () => {
    console.log(arguments)
    let tortal = 0;
    for(let j = 0; j <arguments.length; j++ ){
        tortal = arguments[i]
    }
    return tortal
}
console.log(somar.name)