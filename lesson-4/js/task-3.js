/*
     3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
*/

function Game() {
    // Выбор игрока
    let playerChoice = document.getElementById('game-choice').value;
    // Генератор чисел от 1 до 3
    let computerChoice = Math.random();
    // Выбор компьютера
    if(computerChoice <= 0.33 ) {
        computerChoice = "Rock";
    } else if (computerChoice <= 0.66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    // Игра началась
    if (computerChoice === playerChoice) {
        document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br> К сожалению, или к счастью ничья.";

    } else if(computerChoice === "Rock") {
        if (playerChoice === "Scissors") {
            document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br>Камень сломал ножницы. Вы заняли второе место.";
        } else {
            document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br>Бумага кроет камень. Вы победитель.";
        }
    } else if(computerChoice === "Paper") {
        if (playerChoice === "Rock") {
            document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br>Бумага кроет камень. Вы заняли второе место.";
        } else {
            document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br>Ножницы режут бумагу. Вы победитель.";
        }
    } else if(computerChoice === "Scissors") {
        if (playerChoice === "Paper") {
            document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br>Ножницы режут бумагу. Вы на втором месте.";
        } else {
            document.getElementById('game-result').innerHTML="Вы выбрали - " + playerChoice + " Злая машина выбрала - " + computerChoice + ".<br>Камень сломал ножницы. Вы снова лидер.";
        }
    }
}


