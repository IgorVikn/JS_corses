
/*
    4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
*/

function findFibonachy() {

    let number = +document.getElementById('fibonachy-number').value;
    let startNamber = 0;
    let nextNamber = 1;
    let arrayFibonachy = [];

    if (number > 1) {
 
        for (var i = 0; i < number; i++) {
            nextNamber = startNamber + nextNamber;
            startNamber = nextNamber - startNamber;
            arrayFibonachy[i] = startNamber;
        }
 
        document.getElementById('fibonachy-number').value="";     
        document.getElementById('fibonachy-result').innerHTML="Число Фибоначи для N=1 равно <br> " + arrayFibonachy; 
 
    } else if (number == 0) {

        document.getElementById('fibonachy-number').value="";     
        document.getElementById('fibonachy-result').innerHTML="Число Фибоначи для N=0 равно <br> 0"; 

    } else {
        document.getElementById('fibonachy-number').value="";     
        document.getElementById('fibonachy-result').innerHTML="Число Фибоначи для N=1 равно <br> 1"; 
    }
}



   


 