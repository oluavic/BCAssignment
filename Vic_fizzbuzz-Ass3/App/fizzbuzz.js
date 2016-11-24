var app = {fizzBuzz: function(num){
	
	if (num % 3 === 0 && num % 5 === 0 ){
		//divisible by 3 and 5
		return "FizzBuzz"
	}
	if (num % 3 === 0){
		//divisible by 3
		return "Fizz"
	}
	else if(num % 5 === 0){
	  		//divisible by 5
		return "Buzz"
	}
	else{
	return num
	  
}
}
}
module.exports = app;