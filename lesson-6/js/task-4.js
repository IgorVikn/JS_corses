/*
        4. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. 
        Функция должна возвращать логическое значение.

        function checkPositive(arr) {}

        checkPositive([1, 2, 3, -4, 5]);
*/


function checkPositive(arr) {
    
    function checkNumber( elem ) {
        return elem > 0;
    } 
    return arr.some(checkNumber);
}

console.log(checkPositive([1, 2, 3, -4, 5]));









 