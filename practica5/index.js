const prompt = require('prompt-sync')();

function names() {
    let names;
    const nombres = [];

    while (true) {
        names = prompt('Ingresa un nombre, cuando quieras parar, escribe NO: ');
        if (names === 'NO') {
            break;
        } else if(names === "") {
            console.error('Por favor ingresa un valor valido')
        }
        nombres.push(names.trim());
    }
    return nombres;
}

function repetidos(nombres) {
    const repetidos = [];
    let cantidadRepetidos = 0

    nombres.forEach(element => {
        if (repetidos[element]) {
            cantidadRepetidos ++
        }
        repetidos[element] = true;
    })

    if (cantidadRepetidos !== 0){
        
        console.log('Tienes ', cantidadRepetidos, ' nombres repetidos')
    } else {
        console.log('No tienes repetidos')
    }
    
    return 
}

function list(nombres) {
    

    let largo = nombres[0];
    let corto = nombres[0];

    nombres.forEach(element => {
        if (element.length >= largo.length) {
            largo = element;
        }
        if (element.length <= corto.length) {
            corto = element;
        }
    });

    console.log('Los nombres en la lista son: ', nombres);
    console.log('El total de nombres en la lista son: ', nombres.length);
    console.log('El nombre mas largo es: ', largo);
    console.log('El nombre mas corto es: ', corto);
    repetidos(nombres)
}
const nombres = names();
list(nombres);


