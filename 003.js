var antes = Date.now();
function isPrime (num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}
var prime = 0;
for(let i = 1; i< 600851475143; i++){
	if(600851475143 % i === 0)
		if(isPrime(i)){
			prime = i
			i *= i
			console.log(prime)
		}

}
console.log(prime)
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")