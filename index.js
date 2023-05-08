
let userTries = 1;
let userNum
let correctNum = parseInt(Math.random()*100);

console.log(correctNum)
while (userNum = correctNum){
	userNum = parseInt(prompt('Enter a number:'));
	if(userNum < 1 || userNum > 100){
		alert('Invalid input.Please enter a number between 1 and 100.')
	}
	else if(userNum < correctNum){
		alert('Too Low! Guess again.')
	}	
    else if(correctNum < userNum){
		alert('Too High! Guess again.')
	}	
	else{
		alert(`Congragulations, you guest the number in ${userTries}`)
		break;
	}

	userTries++;

}
alert(`You entered ${userNum}`)


