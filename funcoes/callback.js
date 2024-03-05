const teste = function (cb){
    console.log("função teste")
    console.log(cb)
    cb()
}

const fn = function (param){
    console.log("função anônima de callback")
    console.log(param)
}

//fn(30)

teste(fn)