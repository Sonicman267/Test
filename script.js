function guessnum(){
	var num = Math.floor(Math.random() * 10);;
	console.log(num);
    var guess;

    
     if (guess == num){
    	alert("Thats it");
    }

    while(guess != num){

    	guess = prompt("Guess the number between 0 & 10");

    	if (guess == num){
    	alert("Thats it");
    }
    else{
    	alert("Nope, try again")
    }

    }
   

}
	
function input(){
	var input1 = prompt("Input a number");
	var input2 = prompt("Input another number");
	console.log(input1);
	console.log(input2);

	if(input1 > input2){
		prompt(input1 + " is greater then " + input2);
	}
	else if (input1 < input2){
		prompt(input2 + " is greater then " + input1);

	}
	else if(input1 = input2){
		alert("Those are the same numbers!");
	}



}

function triangle(){
	var ang1 = parseInt(prompt("Input a number below 180"));
	var ang2 = parseInt(prompt("Input another number below 180"));
	var ang3 = 180 - (ang1 + ang2);
	alert("The last angle is " + ang3);
	console.log(ang1, ang2);
	console.log(ang3);

	
		
}

function givemeayear(){
	var year = prompt("Give me a year, & I will tell you the century it is in!");
	var century = year/100 + 1;
	console.log(century);

	alert("That year is in the " + Math.floor(century) + " century");



	
}

function counting(){
	for(i = 1; i < 101; i++){
		if(i % 4 == 0 && i % 10 == 0){
			console.log("FourTen");
		}
		else if(i % 4 == 0){
			console.log("Four");
		}
		else if(i % 10 == 0){
			console.log("Ten")
		}
		else{
			console.log(i);
		}
		
	}

}



    	


