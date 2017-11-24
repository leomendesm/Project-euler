var antes = Date.now();
var res = 0;
for(let i = 0;i< 1000;i++)
	if(i % 3 === 0 || i % 5 === 0) res += i
console.log(res);
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")