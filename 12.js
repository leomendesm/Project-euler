var antes = Date.now();
var x = 0, y = 1;

function factors(n) {

	let count = 0;
	let i = 1;
	let max = n;

  	while (i < max) {
    	if (n % i == 0) {
	      	count++; // i is a factor, pass it the array;
	      	let k = n / i; // k is also a factor 
	      	if (i !== k) {
	        	count++; // only push k if it's not the current i
	      	}
			max = k;
		}
		i++;
  	}
  return count;
}

while (factors(x) <= 500) {
	x += y;
  	y++;
}
console.log(x);
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")