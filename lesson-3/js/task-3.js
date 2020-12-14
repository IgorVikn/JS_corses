/*
     3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.
*/

var arraySize = +prompt("Введите размер массива", 0);
var arrayFinal = new Array(arraySize);

for (var i = 0; i < arrayFinal.length; i++) {
    let item = (i%2) ? 'odd' : 'even';
    item = (i==0) ? 'null' : item;

    let itemAmount = 3;
    arrayFinal[i] = new Array(itemAmount);

    for (var j = 0; j < itemAmount; j++) {
        arrayFinal[i][j] = item;
    }
}

for (var i = 0; i < arrayFinal.length; i++) {
    document.write(arrayFinal[i] + "<br/>");
}


