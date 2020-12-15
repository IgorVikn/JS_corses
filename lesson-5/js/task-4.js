/*
    4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.
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
// Функция добавления обьектам свойство "salary" в зависимости от значения свойства "occupation"
function EmployeesSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].occupation) {
            case "director":
                arr[i].salary = 3000;
                break;
            case "manager":
                arr[i].salary = 1500;
                break;
            case "programmer":
                arr[i].salary = 2000;
                break;
            default:
                arr[i].salary = 1000;
        }
    }
}
// Добавление в массив обьектов и внесение в них данных
CreateMassiveEmployees(arrayEmployees); 
// Добавляем обьектам свойство "salary" 
EmployeesSalary(arrayEmployees); 
// Выводим содержимое массива на екран
for (var i = 0; i < arrayEmployees.length; i++) {
    document.write ("----------Сотрудник №" + (i+1) +  "-------<br>");
    arrayEmployees[i].show();
    document.write ("Зарплата: " + arrayEmployees[i].salary + "<br>");
}





 