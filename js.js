if (performance.navigation.type == 1){

    var dice1 = rollDice();
    var dice2 = rollDice();

    changeDiceImage(dice1, 1);
    changeDiceImage(dice2, 2);
    decideWinner(dice1, dice2)

}


function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }


function decideWinner(p1, p2){
    if (p1>p2) {
        document.querySelector(".container h1").innerText = "🚩 Player 1 Wins!"
    }
    else if (p2>p1) {
        document.querySelector(".container h1").innerText = "Player 2 Wins! 🚩"
    }

    else {
        document.querySelector(".container h1").innerText = "DRAW!!!"
    }
}


function changeDiceImage(Rnum, imgNum) {
    if(Rnum === 1){
        document.querySelector("img.img" + imgNum).src="images/dice1.png"
    }

    else if(Rnum === 2){
        document.querySelector("img.img" + imgNum).src="images/dice2.png"
    }

    else if(Rnum === 3){
        document.querySelector("img.img" + imgNum).src="images/dice3.png"
    }

    else if(Rnum === 4){
        document.querySelector("img.img" + imgNum).src="images/dice4.png"
    }

    else if(Rnum === 5){
        document.querySelector("img.img" + imgNum).src="images/dice5.png"
    }

    else if(Rnum === 6){
        document.querySelector("img.img" + imgNum).src="images/dice6.png"
    }

    return Rnum;
}