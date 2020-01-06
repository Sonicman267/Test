function guessnum(){
	var num = Math.floor(Math.random() * 10);;
	console.log(num);
	var guess;
	
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
	return century;
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

function Confused(){
	var con;
	var no = "no";

	while(con != no){
		con = prompt("Are you still confused");
		
		if(con == null){
			return;
		}
		else if(con == no){
			alert("Great your not confused anymore");
		}
		else{
			alert(con);
		}
	}
}

function words(){
	var words = ["apples", "chips", "soap", "soup", "thursday"];
	var longestWord = 0;

	for(let i = 0; i < words.length; i++){
		if(words[i].length > longestWord){
			longestWord = words[i].toString;
		}
		console.log(string(longestWord));
	}
	
}

function temp(celcius){
	var temp = ["30", "50", "70"]; 

	alert(temp);

	for(let i = 0; i < temp.length; i++){
	 console.log(temp[i] - 32 * 5 / 9);
	}
}

function string(){
	var str = "Soup";
	console.log(str.length);
}

function login(user, pass){
	var user = "AIDEN";
	var pass = "SOUP";
	
	var input1 = prompt("Enter a password");
	var input2 = prompt("Enter a password");

	if(input1 == user){
		alert(input1.toLowerCase());
		
	}
	
	 if(input2 == pass){
		alert(input2.toLowerCase());
	}

	
	
}
console.log(login);
	




