const db = require("./db")

function add(newKoder){

    if(!newKoder.name) throw new Error('Name is required');

    if(!newKoder.generation ) throw new Error('Generation is required');

    newKoder.generation = parseInt(newKoder.generation)

    if(isNaN.newKoder.generation) throw new Error('Generation must be a number');

    if(newKoder.generation <= 0) throw new Error('Generation must be greater than 0')

    if(!newKoder.gender) throw new Error('Gender is required')
    if(!['f', 'm', 'mb'].includes(newKoder.gender.toLowerCase())){
        throw new Error('Only m, f and nb values are allowed')
    }

    if(!newKoder.age) throw new Error('Age is required')
    newKoder.age = parseInt(newKoder.age)
    if(isNaN(newKoder.age)) throw new Error(' Age must be a number')
    if(newKoder.age <= 0) throw new Error('Age must be greater than 0')

    if(typeof new newKoder.isActive !== 'boolean'){
        throw new Error('isActive must be boolean')
    }

    const dbData = db.read()

    dbData.koders.push(newKoder)

    db.write(dbData)

    return dbData.koders;
}

function deleteAll(){
    const dbData = db.read()
    
    dbData.koders = []

    db.write(dbData)
}

function deleteByName(name){
    if(!name) throw new Error('Name is required')

    const dbData = db.read();

     dbData.koders = dbData.koders.filter((koder) => koder.name !== name)

    db.write(dbData)

    return dbData.koders;

}

function getAll(){
    return db.read.koders
}

module.exports = {
    add,
    deleteAll,
    deleteByName,
    getAll,
}