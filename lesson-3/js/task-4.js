/*
    4. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку. 
*/

var arrayFirst = [];

arrayFirst[0] = ['Dinamo', 'Shahtar', 'Dnipro'];
arrayFirst[1] = ['Subaru', 'Acura', 'BMW'];
arrayFirst[2] = ['Dnepr', 'Kiev', 'Harkiv'];

var arraySecond = [];

arraySecond[0] = ['14', '22', '16'];
arraySecond[1] = ['2000', '3000', '3600'];
arraySecond[2] = ['2 500 000', '3 000 000', '2 000 000'];

var arrayGeneral = arrayFirst.concat(arraySecond);

for (var i = 0; i < arrayGeneral.length; i++) {

    for (var j = 0; j < arrayGeneral[i].length; j++) {

        document.write(arrayGeneral[i][j]);
    }
    document.write('||');
}


 