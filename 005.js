var antes = Date.now();
var count = 0
var number = 1
while(count  < 20){
	for(let i = 1; i<=20; i++){
		if(number % i === 0){
			count++
		}
	}
	if(count != 20){
		number++;
		count = 0
	}else{
		console.log(count, number);
		break;
	}
}
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")