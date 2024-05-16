const valor =  parseInt(process.argv[2])


function parimpar(valor){
    if (valor % 2 == 0) {
        console.log('par')
    } else {
        console.log('impar')
    }
}

parimpar(valor)