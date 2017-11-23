var a = 0, b = 0;
for(let i = 1;i<=100;i++){
	a += Math.pow(i,2)
	b += i
}
console.log(Math.pow(b,2)-a)