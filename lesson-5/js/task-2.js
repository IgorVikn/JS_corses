/*
    2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
       Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
       В зависимости от принятого знака операции, вызвать соответствующий метод.

*/
    var CalCulator = {
        
        // Метод слоджения двух операндов
        GetSum: function(arg1, arg2) {
            return arg1 + arg2;
        },
        // Метод отнимания двух операндов
        GetDifference: function(arg1, arg2) {
            return arg1 - arg2;
        },
        // Метод деления двух операндов
        GetDivision: function(arg1, arg2) {
            return arg1 / arg2;
        },
        // Метод умножения двух операндов
        GetMultiplication: function(arg1, arg2) {
            return arg1 * arg2;
        }, 

        GetOperation: function() {
            var arg1 = +document.getElementById('arg1').value;
            console.log(arg1);
            var arg2 = +document.getElementById('arg2').value;
            console.log(arg2);
            var operation = document.getElementById('operation').value;
            console.log(operation);

            switch (operation) {
            case "+":
                var result = this.GetSum(arg1, arg2);
                break;
            case "-":
                var result = this.GetDifference(arg1, arg2);
                break;
            case "*":
                var result = this.GetMultiplication(arg1, arg2);
                break;
            case "/":
                var result = this.GetDivision(arg1, arg2);
                break;
            }
            alert("Результат операции: " + result);    
            console.log(result);
            
        }

    };







