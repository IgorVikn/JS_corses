/*
    2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
*/


function Exponentiation() {
    
    let number = +document.getElementById('calculator-number').value;
    console.log(number);
    let degree = +document.getElementById('calculator-degree').value;
    console.log(degree);

    if (degree <= 0) {
        document.getElementById('calculator-number').value="";
        document.getElementById('calculator-degree').value="";   
        document.getElementById('calculator-result').innerHTML="";     
        alert("Вы указали степень отрицательное число или равной 0, повторите ввод");

    } else {

        let result = Math.pow(number, degree);
        document.getElementById('calculator-number').value="";
        document.getElementById('calculator-degree').value="";     
        document.getElementById('calculator-result').innerHTML=result;
    }

    
    /* while (degree > 0) {               
        
        result *=number;
        degree--;
    }; */
    
    

} 






