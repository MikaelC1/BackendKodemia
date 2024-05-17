// Registrar un nuevo koder
// Listar Koders
// Eliminar por nombre
// Eliminar todos los koders
const fs = require('node:fs')
const koderList = 'koders.json'

function init(){
    const fileExist = fs.existsSync(koderList)

    if(!fileExist){
        fs.writeFileSync(koderList, JSON.stringify({koder: []}))
    }
}

function getKoders(){
    const content = fs.readFileSync(koderList, 'utf8')
    return JSON.parse(content).koders
}

function updateJson(koders){
    const newKoders = {koders: koders}
    fs.writeFileSync(koderList, JSON.stringify(newKoders))
}

function add(koder){
    const koders = getKoders()
    koders.push(koder)
    updateJson(koders)
}

function rm(index){
    const koders = getKoders()
    koders.splice(index, 1)
    updateJson(koders)
}

function ls(){
    const koders = getKoders()

    if (!koders.length){
        console.log('[No hay koders en la lista]')
        process.exit()
    }

    koders.forEach((koder, index) => {
        console.log(index, ' ', koder)
    });
}

function reset(){
    updateJson([])
}




function main(){
    let command = process.argv[2]
    let value = process.argv[3]
    init()

    switch(command){
        case 'add':

            if(!value){
                console.log('Please enter a name')
                process.exit(1)
            }

            add(value)
            ls()
            break

        case 'ls':
            ls()
            break

        case 'rm':
            const koders = getKoders()
             
            if(!value){
                console.error('Invalid  Token')
            }
            if(value > 0 || value <= koders.length){
                console.error('Invalid Token')
            }

            rm(value)
            ls()
            break

        case 'reset':
            reset()
            break

        default:
            console.error('Invalid Command')
            break
    }
}

main()