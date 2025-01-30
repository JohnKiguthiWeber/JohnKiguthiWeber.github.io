let xTurn = true;
let turn = 0;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) { 
        if (xTurn) {
        document.getElementById(buttonId).innerHTML = "X";
        // TODO: Set X color
        document.getElementById(buttonId).style = 'color:Blue;';
        }   
        else {
        document.getElementById(buttonId).innerHTML = "O";
        // TODO: Set O color
        document.getElementById(buttonId).style = 'color:Red;';
        }

        
        xTurn = !xTurn; 
        checkWin();
    }
}


function resetGame() {

    document.getElementById("a1").innerHTML = ""; 
    document.getElementById("a2").innerHTML = ""; 
    document.getElementById("a3").innerHTML = "";

    document.getElementById("c1").innerHTML = ""; 
    document.getElementById("c2").innerHTML = ""; 
    document.getElementById("c3").innerHTML = "";

    document.getElementById("b1").innerHTML = ""; 
    document.getElementById("b2").innerHTML = ""; 
    document.getElementById("b3").innerHTML = "";
    // I wish i could just throw a loop in here, would be much easier
    xTurn = true;
    turn = 0;
    document.getElementById('win').innerHTML = '';
}

function checkWin() {

    let a1 = document.getElementById("a1").innerHTML; 
    let b1 = document.getElementById("b1").innerHTML; 
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML; 
    let b2 = document.getElementById("b2").innerHTML; 
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML; 
    let b3 = document.getElementById("b3").innerHTML; 
    let c3 = document.getElementById("c3").innerHTML; // Arrays when?

    // a1 b1 c1
    // a2 b2 c2
    // a3 b3 c3

    // if (a1 == b1 && b1 == c1 && a1 == "X") { 
    
    // TODO: Inform the player that X wins on the page }
    
    // TODO: Complete the logic for the remaining win possibilities 

    let activePlayer = !xTurn ? 'X' : 'O'
    let winnerFound = false; 
    turn += 1;

    if (a1 == b1 && b1 == c1 && c1 == activePlayer){ // horizontals //1 + 2
        winnerFound = true;
    }
    else if (a2 == b2 && b2 == c2 && c2 == activePlayer){ //3 + 4
        winnerFound = true;
    }
    else if (a3 == b3 && b3 == c3 && c3 == activePlayer){ //5 + 6
        winnerFound = true;
    }
    else if (a1 == a2 && a2 == a3 && a3 == activePlayer){ // verticals //7 + 8
        winnerFound = true;
    }
    else if (b1 == b2 && b2 == b3 && b3 == activePlayer){ //9 + 910
        winnerFound = true;
    }
    else if (c1 == c2 && c2 == c3 && c3 == activePlayer){ //11 + 12
        winnerFound = true;
    }
    else if (a1 == b2 && b2 == c3 && c3 == activePlayer){ // Diagonals //13 + 14
        winnerFound = true;
    }
    else if (a3 == b2 && b2 == c1 && c1 == activePlayer){ //15 + 16
        winnerFound = true;
    }
    else if (turn == 9 && !winnerFound){
        document.getElementById('win').innerHTML = 'Draw';
        // resetGame();
    }

    if (winnerFound){
        document.getElementById('win').innerHTML = 'Player ' + activePlayer + ' Wins!';
        winnerFound = false;
        // resetGame();
    }
}