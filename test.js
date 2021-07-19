let day = 19;
if (day >= 0 && day <= 10){
    console.log("Первая декада");
}
if (day >= 11 && day <= 20){
    console.log("Вторая декада");
}
if (day >= 21 && day <= 31){
    console.log("Третья декада");
}
if (day >= 32) {
    console.log("Введите коректное число");
}

let month = 7;
if (month === 12 && month === 1 && month === 2){
    console.log("Зима");
}
if (month >= 3 && month <= 5){
    console.log("Весна");
}
if (month >= 6 && month <= 8){
    console.log("Лето");
}
if (month >= 9 && month <= 11){
    console.log("Осень");
}
if (month >= 13) {
    console.log("Введите коректное число");
}


let min = 30;
if (min >= 0 && min <= 14) {
    console.log("Первая четверть");
}
if (min >= 15 && min <= 30) {
    console.log("Вторая четверть");
}
if (min >= 31 && min <= 45) {
    console.log("Третья четверть");
}
if (min >= 46 && min <= 59) {
    console.log("Четвертая четверть");
}
if (min >= 60) {
    console.log("Введите коректное число");
}

let age = 21;
if (age >= 18){
    console.log("Добро пожаловать");
}else {
    console.log("Только 18+");
}