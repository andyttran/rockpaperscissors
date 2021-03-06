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

//The input parameter has been expanded to include game, which maintains our state
var rockPaperScissors = function(n, game){
  //1. Instantiate variables, use the OR operator to instantate 'game' if 'game' was not included as an input parameter
  n = n || 3;
  game = game || [];
  //NOTE: games is no longer a scope variable we can push in. Each recursive call in the stack creates its own games array.
  //We will then need to build up the games array each level we traverse back up the stack.
  games = [];
  //NOTE: our recursive calls would instantiate its own version of plays each time. How would we fix this ineffeciency?
  var plays = ['rock', 'paper', 'scissors'];
  // 3. Base case, when we have the right number of rounds played we return a nested array. E.g., for n = 3, 
  //we could return [['rock', 'rock', 'rock']]. Think about which it needs to be a nested array.
  // NOTE: Typically the base case will have a return statement.
  if(game.length === n){
    return [game];
  }
  // 4. Recursive case, we will recursively call this function, adding each of the possible plays for the round
  for(var i = 0; i < 3; i++){
    //NOTE: when we concat the games array, with the result of the recursive call to rockPaperScissors (a nested array),
    //we get the proper format for the collection of solutions (array of arrays).
    games = games.concat(rockPaperScissors(n, game.concat(plays[i])));
  }
  //2. We return the collections of solutions up one stack (or out of the function if this is the top level)
  return games
}

//METHOD 3:
//No helper function & no extra arguments passed into main function. (Bottom-up approach)
//No extra arguments means you cannot save the state.  The return value must be the state itself.

//If we cannot define a 'plays' array outside of the function, how would we place this within the function but not have it 
//repeatedly be instantiated with each recursive call?
var plays = ['rock', 'paper', 'scissor'];
function rockpaperscissors(n){
  // 1. Initiate variables.
  var result = [];
  var temp;
  // 2. Base case, when we reach the bottom of the stack we return an instantiating 
  if(n === 0){
    return [[]];
  }
  // 3. Recursively call itself until we reach the bottom of the stack first, prior to building up solutions.
  var games = rockpaperscissors(n-1);
  // 4. Run operations after the bottom of stack is reached.  This technically starts the build up from the bottom up.
  // 'games' is equal to an empty nested array the first time [[]]
  for(var i = 0; i < 3; i++){
    //make a temporary copy of the 'games' array
    temp = games.slice()
    for(var j = 0; j < temp.length; j++){
      //add a play to the front of each item in the temp array
      temp[j] = [plays[i]].concat(temp[j]);
    }
    //collect the expanded temp array into the results array
    result = result.concat(temp);
  }
  // 5. return results up the stack to start the next round of plays to be added, 
  //or if at the top of the stack return the entire solution. 
  return result;
}
