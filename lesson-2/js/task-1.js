/*
    1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
*/
var a, b, c, average

var a = +prompt("Введите значение первого числа ( A ) ", 0);
var b = +prompt("Введите значение второго числа ( B ) ", 0);
var c = +prompt("Введите значение третего числа ( C ) ", 0);

if ( a == b || b == c || c == a) 
{
    alert ( 'ОШИБКА' );
    average = 'Неопределено';
}
else{
    
    average = ( a + b + c) / 3;
    alert ('Среднее значение: ' + average);
}

document.write ('Среднее значение: ' + average);