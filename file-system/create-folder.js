const fs = require('node:fs');
const prompt = require('prompt-sync')()

function getFolderName(){

    let folderName = prompt('Ingresa como quieres que se llame la carpeta: ')

    if(folderName == ""){
    console.log('Por favor ingresa un nombre valido')
    }

    return folderName
}

function createFolder(name){
    fs.mkdirSync(name)  
}   
createFolder(getFolderName())