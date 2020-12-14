/*
    2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
*/

var rowModel = ['Subaru', 'Acura', 'BMW', 'Citroen', 'Ford', 'Honda', 'Jeep', 'Lexus'];

document.write ('Елементы массива: ' + rowModel + '<br>');

var itemName = prompt("Введите елемент массива для вставки");
var position = +prompt("Введите номер елемента после которого вставить новый элемент (всего в массиве "+ rowModel.length +" )", 1);

rowModel.splice(position, 0, itemName);
document.write ('Елементы массива c вставленным елементом: ' + rowModel + '<br>');


