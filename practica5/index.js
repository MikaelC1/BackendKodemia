const prompt = require('prompt-sync')();

function names() {
    let names;
    const nombres = [];

    while (true) {
        names = prompt('Ingresa un nombre, cuando quieras parar, escribe NO: ');
        if (names === 'NO') {
            break;
        }
        nombres.push(names.trim());
    }
    return nombres;
}

function repetidos(names) {
    const repetidos = {};
    let cantidadRepetidos = 0

    for (let nombre of names) {
        if (repetidos[nombre]) {
            cantidadRepetidos ++
        }
        repetidos[nombre] = true;
    }
    if (cantidadRepetidos !== 0){
        console.log('Tienes ', cantidadRepetidos, ' nombres repetidos')
    }
    return console.log('No tienes repetidos')
}

function list(nombres) {
    

    let largo = nombres[0];
    let corto = nombres[0];
    let cantidadLetras = 0;

    nombres.forEach(element => {
        cantidadLetras += element.length;

        if (element.length > largo.length) {
            largo = element;
        }
        if (element.length < corto.length) {
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


