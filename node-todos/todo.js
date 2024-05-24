// todo add tarea
// todo done indice
// todo ls 
// todo alv

// necesitamos
// - un archivo para guardar todos (.jason)
// - una funcion para cada comando
// - usar process.argv para leer los comandos
// - usar fs para leer y escribir el archivo

const fs = require('node:fs');
const dbFile = 'db.json'

function getTodos(){
    // 1.- Leer Archivo
    const content = fs.readFileSync(dbFile, 'utf8');
    return JSON.parse(content).todos
}

function updateTodos(todos){
    const newTodos = { todos: todos}
    const newTodosAsString = JSON.stringify(newTodos)
    fs.writeFileSync(dbFile, newTodosAsString)
}

function add(task){
    // leer archivo
    // Agregar al archivo
    const todos = getTodos()
    todos.push(task)
    updateTodos(todos)
}

function done(taskIndex){
 // Leer archivo
 // actualizar el archivo
    const todos = getTodos()
    todos.splice(taskIndex, 1)
    updateTodos(todos)
}

function ls(){
    // leer Archivo
    const todos = getTodos()

    if(!todos.length){
        console.log('[Empty]')
        process.exit()
    }

    todos.forEach(task, index => {
        console.log(index, '-', task)
    });
}

function alv(){
    // actualizar el archivo
    updateTodos([])
}

function init(){
    // crear el archivo de base de datos
    const fileExist = fs.existsSync(dbFile)

    if(!fileExist){
        fs.writeFileSync(dbFile, JSON.stringify({todos: []}))
    }
}

function main(){
    const command = process.argv[2]
    const arg = process.argv[3]
    init()

    if(command === 'ls'){
        ls()
    } else if (command === add){
        if (!arg){
            console.error('missing task')
            process.exit(1)
        }
        add(arg)
        ls()
    } else if(command === done){
        const todos = getTodos()
        if(!arg){
            console.log('missing task index')
            process.exit
        }
        if(isNan(index)){
            console.error('invalid index')
            process.exit(1)
        }
        if (index < 0 || index >= todos.length){
            console.error('Invalid index')
            process.exit(1)
        }
        done()
        ls()
        console.log('Task Completed')
    } else if (command === 'alv'){
        alv()
        console.log('Algo bueno vendra')
    } else {
        console.error('Invalid Command')
    }
}

main()