//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

let arr = [1, 2, 3, 4, 5]
console.log(arr.slice(0 , 3));


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

console.log(arr.slice(3));

//Задаем начальную строку чисел. Напишите функцию spliceNum(num, symbol), которая принимает число num в качестве аргумента и symbol в качестве разделителя и вставляет symbol после каждого нечетного числа. Если последний элемент также является нечетным, то вставлять symbol не нужно.

const num = "1124356712453"

function spliceNum (num, symbol){
    let arr = num.split("");
    let arrNum = arr.map(Number);
        for (let i = 0; i < arrNum.length; i++){
            if (arrNum [i] % 2 !== 0 && arrNum[(i - 1)] % 2 === 0){
                arrNum.splice(i, 0, symbol);
            }
        }


    return arrNum.join("");
}

console.log(spliceNum(num,"-"));

