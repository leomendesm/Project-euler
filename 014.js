var antes = Date.now();
function iterate(n){
	if(n % 2 == 0 )
		return n/2;
	else
		return (3*n)+1;
}
var result = 0;
for (var i = 0; i < 1000000; i++) {
	count = 0;
	res = i;
	while(res > 1){
		count++;
		res = iterate(res);
	}
	if(result < count)
		result = i;
}
console.log(result);
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")