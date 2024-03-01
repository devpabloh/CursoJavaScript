function fn(cb){
    console.log("executar acao callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()

}
/* 
fn (function(){
    console.log("funcao passada por parametro")
}) */

function callback(){
    console.log("funcao passada por parametro")
}
fn(callback)

const obj = {
    callback: callback
}
obj.callback()  

function fn2(n1){
    return function(n2){
         return n1 * n2
    }
}
const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult)

function fn3(){
return function _fn3(){
    console.log("funcao retornada por parametro")
}
}
fn3.count = 0
const funcao3 = fn3()
funcao3()
console.log(fn3.count)