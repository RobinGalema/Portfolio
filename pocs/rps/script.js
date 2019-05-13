var choice;

function buttonRock(){
  choice = 1;
  game();
}

function buttonPaper(){
  choice = 2;
  game();
}

function buttonScissors(){
  choice = 3;
  game();
}

function  game(){
  if (choice == 1)
  {
    console.log("User selected Rock");
  }
  else if (choice == 2)
  {
    console.log("User selected Paper");
  }
  else if (choice == 3)
  {
    console.log("User selected Scissors");
  }
  else
  {
    console.log("There was nothing selected");
  }

  var min = 1;
  var max = 4;
  var random =Math.floor(Math.random() * (+max - +min)) + +min;

  if (random == 1)
  {
    console.log(random + " : Rock");
    document.getElementById('computerText').innerHTML = "The computer chose Rock";
    if (choice == 1)
    {
      console.log("Draw");
      document.getElementById('gameresult').innerHTML = "The game is a draw.";
    }
    else if (choice == 2)
    {
      console.log("User won");
      document.getElementById('gameresult').innerHTML = "You won!";
    }
    else if (choice == 3)
    {
      console.log("User lost");
      document.getElementById('gameresult').innerHTML = "You lost.";
    }
  }
  else if (random == 2)
  {
    console.log(random + " : Paper");
    document.getElementById('computerText').innerHTML = "The computer chose Paper";
    if (choice == 1)
    {
      console.log("User lost");
      document.getElementById('gameresult').innerHTML = "You lost.";
    }
    else if (choice == 2)
    {
      console.log("Draw");
      document.getElementById('gameresult').innerHTML = "The game is a draw.";
    }
    else if (choice == 3)
    {
      console.log("User won");
      document.getElementById('gameresult').innerHTML = "You won!";
    }
  }
  else if (random == 3)
  {
    console.log(random + " Scissors");
    document.getElementById('computerText').innerHTML = "The computer chose Scissors";
    if (choice == 1)
    {
      console.log("User won");
      document.getElementById('gameresult').innerHTML = "You won!";
    }
    else if (choice == 2)
    {
      console.log("User lost");
      document.getElementById('gameresult').innerHTML = "You lost.";
    }
    else if (choice == 3)
    {
      console.log("Draw");
      document.getElementById('gameresult').innerHTML = "The game is a draw.  ";
    }
  }
}
