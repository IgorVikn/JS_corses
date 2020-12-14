/*
    1. Сделать собственные примеры методов применяемых для массивов.
*/

var rowModel = ['Subaru', 'Acura', 'BMW', 'Citroen', 'Ford', 'Honda', 'Jeep', 'Lexus'];

/* ------ join() ----- */
document.write ('<br>/* ------join() ----- */<br><br>');
var rowModelString = rowModel.join(' + ');
document.write ('Елементы массива объединенные в cтроку: ' + rowModelString + '<br>');

/* ------ reverse() ----- */
document.write ('<br>/* ------ reverse() ----- */<br><br>');
document.write ('Елементы массива следуют в противоположном порядоке: ' + rowModel.reverse() + '<br>');

/* ------ sort() ----- */
document.write ('<br>/* ------ sort() ----- */<br><br>');
document.write ('Елементы массива сортируются в алфавитном порядке: ' + rowModel.sort() + '<br>');

/* ------ concat() ----- */
document.write ('<br>/* ------ concat() ----- */<br><br>');
var rowModel = rowModel.concat(['Волга', 'Жигули', 'Москвич', 'Запорожец', 'Нива']);
document.write ('Елементы объединенного массива: ' + rowModel.sort() + '<br>');

/* ------ slice() ----- */
document.write ('<br>/* ------ slice() ----- */<br><br>');
var rowModelNew = rowModel.slice(rowModel.length - 5);
document.write ('Создает массив из последних пяти элементов: ' + rowModelNew + '<br>');

/* ------ splice() ----- */
document.write ('<br>/* ------ splice() ----- */<br><br>');
document.write ('Вырезает последний элемент массива: ' + rowModel.splice(rowModel.length - 1, 1) + '<br>');
document.write ('Вырезает два следующих элемента массива: ' + rowModel.splice(rowModel.length - 2, 2) + '<br>');

/* ------ push() ----- */
document.write ('<br>/* ------ push() ----- */<br><br>');
rowModel.push('Запорожец', 'Москвич', 'Нива');
document.write ('Добавляем в конец массива 3 элемента: ' + rowModel + '<br>');

/* ------ pop() ----- */
document.write ('<br>/* ------ pop() ----- */<br><br>');
document.write ('Удаленный последний элемент массива: ' + rowModel.pop() + '<br>');
document.write ('Массив без удаленного элемента: ' + rowModel + '<br>');

/* ------ unshift() ----- */
document.write ('<br>/* ------ unshift() ----- */<br><br>');
rowModel.unshift('ЗИЛ', 'КАМАЗ');
document.write ('В массив добавленно два элемента в начало: ' + rowModel + '<br>');

/* ------ shift() ----- */
document.write ('<br>/* ------ shift() ----- */<br><br>');
document.write ('Удаленный первый элемента в начале: ' + rowModel.shift() + '<br>');
document.write ('Удаленный следующий элемент в начале: ' + rowModel.shift() + '<br>');
document.write ('Итоговый массив: ' + rowModel + '<br>');


