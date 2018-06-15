function SummsEl(n){
	var s,
		d = 0,
		result = 0;
	if (n.length != 0){
		for(i = 0; i < n.length; i+=2){
		s = n[i];
		d += s;
	}result = d * n[n.length-1];
	}else{
		result = 0;
	}	
	console.log(result);
}
SummsEl([2, 4, 5]);