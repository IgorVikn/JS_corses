/*
     3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
*/
var arrayEmployees = new Array();
// Функция добавления в массив обьектов и внесение в них данных
function CreateMassiveEmployees(ArrayName) {
    if (confirm("Добавить сотрудника?")) {
        let obj = {};
        obj.Name = prompt("Ведите имя:");
        obj.sName = prompt("Ведите фамилию:");
        obj.age = prompt("Ведите возвраст:");
        obj.occupation = prompt("Ведите профессию:");
        obj.show = function () {
            console.log("Имя: " + obj.Name);
            console.log("Фамилия: " + obj.sName);
            console.log("Возвраст: " + obj.age + " years old");
            console.log("Профессия: " + obj.occupation);
            document.write ("Имя: " + obj.Name + "<br>");
            document.write ("Фамилия: " + obj.sName + "<br>");
            document.write ("Возвраст: " + obj.age + " years old <br>");
            document.write ("Профессия: " + obj.occupation + "<br>");
        };
        ArrayName.push(obj);
        CreateMassiveEmployees(ArrayName);
    } 
    return ArrayName;
}
 // Добавление в массив обьектов и внесение в них данных
CreateMassiveEmployees(arrayEmployees); 
console.log(arrayEmployees);
// Выводим содержимое массива на екран
for (var i = 0; i < arrayEmployees.length; i++) {
    document.write ("----------Сотрудник №" + (i+1) +  "-------<br>");
    arrayEmployees[i].show();
}







