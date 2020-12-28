/*
3. Допишите функцию countOnline; используйте оператор for ... in в этой функции для циклического обхода пользователей в объекте users и возврата количества пользователей, 
для которых для свойства онлайн установлено значение true.

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

        function countOnline(obj) {}

        console.log(countOnline(users));
*/

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: false
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
// Подсчет колличества пользователей, для которых для свойства онлайн установлено значение true в консоль
function countOnline(obj) {

    let count = 0;
    for (var key in obj) {

        if (obj[key].online === true){
            count++ ;
        }  
    }
    return count;
}
// Вывод колличества пользователей, для которых для свойства онлайн установлено значение true в консоль
console.log(countOnline(users));






