var antes = Date.now();

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
var count = 0;

for (var i = 0; i < 100000; i++) {
  for (var j = 0; j < 100000; j++) {
  	if(gcd(i,j))
  		count++;
  }
}

console.log(count);
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")