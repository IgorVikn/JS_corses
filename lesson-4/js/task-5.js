/* 
    5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
       Параметр для сортировки принимается от пользователя.
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
// Получение критерия для сортировки
var SortCrit = prompt("Enter criteria (name, sName, age, salary): ");
// Сортировка массива
arrayEmployees.sort(function(a, b) {
    switch (SortCrit) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else {return 0;}
            break;
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else {return 0;}
            break;
        case "age":
            return a["age"] - b["age"];
            break;
        case "salary":
            return a["salary"] - b["salary"];
            break;
        default:
            alert("None");
    }
});
// Выводим содержимое массива на екран
for (var i = 0; i < arrayEmployees.length; i++) {
    document.write ("----------Сотрудник №" + (i+1) +  "-------<br>");
    arrayEmployees[i].show();
    document.write ("Зарплата: " + arrayEmployees[i].salary + "<br>");
}