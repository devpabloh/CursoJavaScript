function calcularMedia(n1, n2){
    let media = (n1 + n2) / 2
    console.log("A media e " + media)
    
}
calcularMedia(2,6)

let calcularMedia2 =(n3, n4) =>{
    let media1 = (n3 + n4) / 2
    console.log(`A media1 e ${media1}`)

}

calcularMedia2(8,8)

(function (){
    function calcularMedia2(){
        let total2 = 0
        let qtd = arguments.length

        for(let i=0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw error("Só pode números")
            }
            total2 += arguments[i]
            return total2 / qtd
        }

    }
    let media3 = calcularMedia2(2,4)

}())