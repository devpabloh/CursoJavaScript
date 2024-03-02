(function (){
    function calcularMedia(){
        let total = 0
        let qtd = arguments.length

        for(let i=0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw error("Só pode números")
                
            }
            total += arguments[i]
            
        }
        return total / qtd
    }
    let media = calcularMedia(2,4, 6, "4")
    console.log(media)
}())