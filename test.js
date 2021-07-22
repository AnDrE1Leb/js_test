function checkDay(number , prevNumber, name) {
    if (mainNumber >= prevNumber && mainNumber <= number) {
        console.log(name);
        return true
    }
}

let day =  function() {
    mainNumber = 29;
    if (checkDay(10 , 0 ,  "Первая декада")) {

    }else if (checkDay(20 , 11 ,  "Вторая декада")) {

    }else if (checkDay(31 , 21 , "Третья декада")) {

    }else if (checkDay(Infinity, 32 , "Введите коректное число")){

    }
    return mainNumber
}

let month =  function(){
    mainNumber = 7;
    if (checkDay(2 , 0 ,  "Зима")) {

    }else if (checkDay(5 , 3 ,  "Весна")) {

    }else if (checkDay(8 , 6 , "Лето")) {

    }else if (checkDay(11 , 9 , "Осень")) {

    }else if (checkDay(12 , 12 ,  "Зима")) {

    }else if (checkDay(Infinity, 13 , "Введите коректное число")){

    }
    return mainNumber
}


let min =  function(){
    mainNumber = 30;
    if (checkDay(14 , 0 ,  "Первая четверть")) {

    }else if (checkDay(30 , 15 ,  "Вторая четверть")) {

    }else if (checkDay(45 , 31 , "Третья четверть")) {

    }else if (checkDay(59 , 46 , "Четвертая четверть")) {

    }else if (checkDay(Infinity, 60 , "Введите коректное число")){

    }

}

day();
month();
min();

// Проверка возраста

let age = 21;

let welcome = (age < 18) ?
    () => console.log('Строго +18!') :
    () => console.log("Добро пожаловать");

welcome();


// Сумма чисел

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Сумма чисел 1 и 100: " + sum);


// Сумма чисел While

function dzWhile() {

    let i = 1;
    let sumWhile = 0;


    while (i <= 100) {
        sumWhile += i;
        i++;
    }

    console.log("Сумма чисел 1 и 100: " + sumWhile + " (While)");
}

dzWhile()


// Сумма чисел Do While

let sumDoWhile = 0;
let i = 1;

do{
    sumDoWhile += i;
    i++;
}while(i <= 100)

console.log("Сумма чисел 1 и 100: " + sumDoWhile + " (Do While)");
