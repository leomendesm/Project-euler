var res = 0;
var fib = [0,1];
var i = 1
while(fib[i] < 4000000){
    i++;
    fib[i] = fib[i-2] + fib[i-1];
}
for(let i = 0;i < fib.length;i++)
	if(fib[i] % 2 === 0) res += fib[i]
console.log(res);