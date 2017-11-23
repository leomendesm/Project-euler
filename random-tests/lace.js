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
var help = [];
for (var i = 0; i <= 1000000; i++) {
   help.push(i);
}

for (var i = 2; i < 1000000; i++) {
  if (help[i] == i) {
    for (var j = i; j <= 1000000; j += i) {
      help[j] = help[j] / i * (i - 1);
    }
	}
  count += help[i];
}

console.log(count);
var duracao = Date.now() - antes;
console.log("levou " + duracao + "ms")