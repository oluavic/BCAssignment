var app = {aritGeo: function(arr){
	
	if (arr.length === 0){
		return 0
	}
	else{
	  var d = arr[1] - arr[0]
	  var count = 0
	  for(var n = 0; n<= arr.length - 1; n++){
		  if (arr[n+1]-arr[n] == d){
		  	count = count + 1
		  }
	  }
	  if (count == arr.length-1){
	      return "Arithmetic"
	  }
	  else {
	    //check for GP
		  var r = arr[1]/arr[0]
		  var count2 = 0
		  for(var m=0; m<arr.length -1; m++){
			  if (arr[m+1]/arr[m] == r){
				  count2 =count2+1
			  }
		  }
		  if (count2 == arr.length-1){
			  return "Geometric"
		  }
		  else{
			  return -1
		}
	}
}
	
}}
module.exports = app;