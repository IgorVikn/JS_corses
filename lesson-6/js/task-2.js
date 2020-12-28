/*
    2. Завершите написание функции getArrayOfUsers, чтобы она возвращала массив, содержащий все свойства объекта, который он получает в качестве аргумента.

        let users = {
            Alan: {
                age: 27,
                online: false
            },
            Jeff: {
                age: 32,
                online: true
            },
            Sarah: {
                age: 48,
                online: false
            },
            Ryan: {
                age: 19,
                online: true
            }
        };

        function getArrayOfUsers(obj) {}

        console.log(getArrayOfUsers(users));

*/
    
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
// Функция создающая массив содержащий все свойства объекта
function getArrayOfUsers(obj) {

    let usersArr = [];

    for (var key in obj) {
        usersArr.push(key);
    }
    
    return usersArr;

}
// Вывод массив содержащий все свойства объекта
console.log(getArrayOfUsers(users));







