/* 
    1.  Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
        Функция должна расчитывать результат операции, исходя из переданного ей знака. 
        Функция должна проверять корректность введенных чисел и знака операции.
        Все аргументы для функции принять от пользователя. 
*/

function CalCulator() {
    var arg1 = +document.getElementById('arg1').value;
    console.log(arg1);
    var arg2 = +document.getElementById('arg2').value;
    console.log(arg2);
    var operation = document.getElementById('operation').value;
    console.log(operation);

    switch (operation) {
    case "+":
        var result = arg1 + arg2;
        break;
    case "-":
        var result = arg1 - arg2;
        break;
    case "*":
        var result = arg1 * arg2;
        break;
    case "/":
        var result = arg1 / arg2;
        break;
    }
    document.getElementById('arg1').value="";      
    document.getElementById('arg2').value="";     
    document.getElementById('operation-result').innerHTML="Результат операции: " + result;  
    console.log(result);
} 


