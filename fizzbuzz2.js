const numero = parseInt(process.argv[2])

// if(isNaN(numero)){console.error('Argumento no valido') process.exit(1)}

function fizzbuzz(numero){
    if(isNaN(numero)){
        return console.error('Argumento no valido')
    } else {
        for(let i = 1; i <= numero; i++){
            if(i % 3 == 0 && i % 5== 0){
                console.log(i, 'FizzBuzz')
            } else if(i % 3 == 0){
                console.log(i, 'Fizz')
            } else if(i % 5 == 0){
                console.log(i, 'Buzz')
            } else {
                console.log(i)
            }
        }
    }
    
}
fizzbuzz(numero)