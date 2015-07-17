//METHOD: 1
//Helper function method (Top down approach)
//Easier to approach by using a few key steps:
var rockPaperScissors = function (n) {
  //1. Initialize global variables
  n = n || 3;
  var plays = ['rock', 'paper', 'scissors'];
  //2a. Instantiate what you are returning
  var results = [];
	
  //3a. Create the shell of your helper function
  var generateHands = function(game){
    game = game || [];
    //4. Figure out your base case first! When will you stop recursing? 
    	//Here we stop when we have went though enough rounds
    if(game.length === n){
      return results.push(game);
    }
    //5. Finally attack your recursive case.  By now, your structure should set you up so the recursive case
    //is no longer a large problem to solve. Here we can achieve it with 2 lines of code.
    for(var i = 0; i < 3; i++){
      generateHands(game.concat(plays[i]));
    }
  }
  
	//3b. Call your helper function before moving to the next step so you dont forget
  generateHands();
  
  //2b. Write your return statement before going to the next step
  return results;
};

//METHOD 2
//No helper function with added arguments. (Top-down approach)
//Added arguments are used to save the state on the call-stack
var rockPaperScissors = function(n, game){
  n = n || 3;
  game = game || [];
  games = [];
  var plays = ['rock', 'paper', 'scissors'];
  if(game.length === n){
    return [game];
  }
  for(var i = 0; i < 3; i++){
    games = games.concat(rockPaperScissors(n, game.concat(plays[i])));
  }
  return games
}

//METHOD 3:
//No helper function & no extra arguments passed into main function. (Bottom-up approach)
//No extra arguments means you cannot save the state.  The return value must be the state itself.
var plays = ['rock', 'paper', 'scissor'];
function rockpaperscissors(n){
  var result = [];
  var temp;
  if(n === 0){
    return [[]];
  }
  var games = rockpaperscissors(n-1);
  for(var i = 0; i < 3; i++){
    temp = games.slice()
    for(var j = 0; j < temp.length; j++){
      temp[j] = [plays[i]].concat(temp[j]);
    }
    result = result.concat(temp);
  }
  return result;
}
