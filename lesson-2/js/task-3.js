/*
    3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
*/

var a = prompt("Введите первое число", 0);
var b = prompt("Введите второе число", 0);
var c = prompt("Введите третье число", 0);
var max;

if ( a > b && a > c) {

    max = a;

} else if ( b > a && b > c) {

    max = b;

} else if ( c > a && c > b) {

    max = c;

} else {

    max = a;
}

alert('Максимальное число: ' + max);

document.write ('Максимальное число: ' + max);   
