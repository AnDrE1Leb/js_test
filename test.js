//Задача №1

let obj1 = {
    a: 1,
    b: 1,
}

let obj2 = {
    a: 1,
    b: 1,
}


function isEqual (obj1 , obj2) {
    let objKeys = Object.keys(obj1);
    let objKeys2 = Object.keys(obj2);

    if (objKeys.length !== objKeys2.length){
        return false;
    }
    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }

    }

    return true;
}

console.log(isEqual(obj1 , obj2));

//Напишите свой аналог метода Object.keys();

function objKeys (obj){
    let arr = [];
    for (let i in obj){
        arr.push(i);
    }
    return arr;
}

console.log(objKeys(obj1));

//Напишите свой аналог метода Object.values();

function objValues (obj){
    let arr = [];
    for (let i in obj){
        arr.push(obj[i]);
    }
    return arr;
}

console.log(objValues(obj1));


//С помощью функций конструкторов создайте ферму животных. Ферма будет массивом, а объекты – животными. Создайте несколько разных животных и потом отфильтруйте их из массива животных по разным критериям. Например по месту проживания или питанию


function Animal(name) {
    this.name = name;
}

let lion = {
    species : "Млекопитающие",
    eat : "Хищник",
    size : "Большой",
}

let pigeon = {
    species : "Птицы",
    eat : "Травоядное",
    size : "Маленький",
}

let eagle = {
    species : "Птицы",
    eat : "Хищник",
    size : "Маленький",
}

let sheep = {
    species : "Млекопитающие",
    eat : "Травоядное",
    size : "Средний",
}

let cat = {
    species : "Млекопитающие",
    eat : "Хищник",
    size : "Маленький",
}


