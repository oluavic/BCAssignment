var app = {findMinMax: function(arr){
	
	if (arr.length === 0){
		return "Empty Array"
	}
	else{
	  var max = arr[0]
	 var min = arr[0]
	 //max
	  for(var n = 0; n<= arr.length - 1; n++){
		  if (max< arr[n]){
		  	max = arr[n]
		  }
	  }
	  //min
	  for(var m = 0; m<= arr.length - 1; m++){
		  if (min > arr[m]){
		  	min = arr[m]
		  }
	  }
	  if(min == max){
	  	return [min]
	  }
	  else{
	  	return [min,max]
	  }
	  }
	
}}
module.exports = app;