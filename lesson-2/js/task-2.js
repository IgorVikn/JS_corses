/*
    2. Построить прямоугольный треугольник состоящий из символа "*".
*/

var x = +prompt("Введите колличество уровней триугольника", 0);
var triangle = '* <br>';
var line ='*';


document.write ('Наш триугольник: <br>');

while (x > 0) {    

    line = line + '*';
    triangle =  triangle + line + '<br>';
    x--;
};
 
document.write ( triangle + '<br>');   