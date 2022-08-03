function handle1Click() {

    let letters = ['a', 'b', 'w', 'g', 'y', 'i', 'p']

    console.log(letters.reverse())
}

function handle2Click() {
    createIlegalObject({ a: 2, b: 4, c: '1', d: 55, e: 'hello' }, x => typeof x === 'string')
}

function handle3Click(miniObjects) {
    let fusion = {};

    miniObjects.forEach(object =>{
        var keys = Object.keys(object)
        if(Object.keys(fusion).length === 0){
            fusion = {...object}
        }
        else{
            keys.forEach(key => {

                if(Object.keys(fusion).includes(key)){

                    if(Array.isArray(fusion[key])){
                        fusion[key].push(object[key])
                    }
                    else if(Array.isArray(object[key])){

                        var newArray = [...object[key]]
                        newArray.unshift(fusion[key])
                        fusion[key] = newArray
                    }
                    else if(Array.isArray(fusion[key]) && Array.isArray(object[key])){
                        fusion[key] = fusion[key].concat(object[key])
                    }
                    else{
                        fusion[key] = [fusion[key], object[key]]
                    }
                }
                else{

                    fusion[key] = object[key]
                }
            })
        }
    })

    console.log(fusion)
}

function handle5Click(array, condition){
    array.sort(condition)
    console.log(array[0])
}
function handle6Click(array, condition){
    console.log(array.every(value => condition(value)))
}

function handle7Click(array, condition){
    console.log(array.filter(item => !condition(item)))
}

function createIlegalObject(object, condition) {
    const parts = Object.keys(object);

    let newObject = parts.filter(key => !condition(object[key])).reduce((result, current) => { result[current] = object[current]; return result }, {})
    console.log(newObject)
}