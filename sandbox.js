//Display Html
(function DisplayHtml(){
    const adds = document.querySelectorAll('.box');
    let counter = 0;
    let gameResults = ['x', 'o','x', 'o','x', 'o', 'x', 'o', 'x'];
    let count = 0;
    let playing = ["Player Two's Turn", "Player One's Turn", "Player Two's Turn", "Player One's Turn", "Player Two's Turn", "Player One's Turn", "Player Two's Turn", "Player One's Turn", "It's a draw!"];
    adds.forEach(function(xO){
    xO.addEventListener('click', function(e){
    if(e.target.innerHTML == ''){
    e.target.innerHTML = gameResults[counter ++];
    document.querySelector('.display').innerHTML = playing[count++];
    } else {
        return false
    }
});
});
})();

//Output winner
(function winOrDraw(){
    const adds = document.querySelectorAll('.box');
    adds.forEach(function(xO){
    xO.addEventListener("click", winOrDraw);
    });

    const one = document.querySelector('.one').innerHTML;
    const two = document.querySelector('.two').innerHTML;
    const three = document.querySelector('.three').innerHTML;
    const four = document.querySelector('.four').innerHTML;
    const five = document.querySelector('.five').innerHTML;
    const six = document.querySelector('.six').innerHTML;
    const seven = document.querySelector('.seven').innerHTML;
    const eight = document.querySelector('.eight').innerHTML;
    const nine = document.querySelector('.nine').innerHTML;

    if(one == 'x' && two == 'x' && three == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!';
        play();
    }else if(four == 'x' && five == 'x' && six == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(seven == 'x' && eight == 'x' && nine == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(one == 'x' && four == 'x' && seven == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(two == 'x' && five == 'x' && eight == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(three == 'x' && six == 'x' && nine == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(one == 'x' && five == 'x' && nine == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(three == 'x' && five == 'x' && seven == 'x'){
        document.querySelector('.display').innerHTML = 'Player 1 wins!'
        play();
    }else if(one == 'o' && two == 'o' && three == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(four == 'o' && five == 'o' && six == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(seven == 'o' && eight == 'o' && nine == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(one == 'o' && four == 'o' && seven == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(two == 'o' && five == 'o' && eight == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(three == 'o' && six == 'o' && nine == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(one == 'o' && five == 'o' && nine == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }else if(three == 'o' && five == 'o' && seven == 'o'){
        document.querySelector('.display').innerHTML = 'Player 2 wins!'
        play();
    }
})();

//Open form
(function openForm() {
   window.open(document.getElementById("myForm").style.display = "block");
})();

//Close form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }

//Start game button function
function startGame(e){
    e.preventDefault();
    let p1 = document.getElementById("player1").value;
    document.getElementById("play1").value = p1;
    let p2 = document.getElementById("player2").value;
    document.getElementById("play2").value = p2;
    closeForm();
    }
    
    function play() {
        document.querySelector(".playAgain").style.display = "block";
    }
    