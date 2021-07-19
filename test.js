let day = 19;
if (day >= 0 && day <= 10){
    console.log("Первая декада");
}else if (day <= 20){
    console.log("Вторая декада");
}else if(day <= 31){
    console.log("Третья декада");
}else if (day >= 32) {
    console.log("Введите коректное число");
}

let month = 7;
if (month === 12 && month === 1 && month === 2){
    console.log("Зима");
}else if (month <= 5){
    console.log("Весна");
}else if (month <= 8){
    console.log("Лето");
}else if (month <= 11){
    console.log("Осень");
}else if (month >= 13) {
    console.log("Введите коректное число");
}


let min = 30;
if (min >= 0 && min <= 14) {
    console.log("Первая четверть");
}else if (min <= 30) {
    console.log("Вторая четверть");
}else if (min <= 45) {
    console.log("Третья четверть");
}else if (min <= 59) {
    console.log("Четвертая четверть");
}else if (min >= 60) {
    console.log("Введите коректное число");
}

let age = 21;
if (age >= 18){
    console.log("Добро пожаловать");
}else {
    console.log("Только 18+");
}