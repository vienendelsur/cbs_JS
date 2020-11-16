// page pour 02-valeurs.html

// déclaration de a
var a = 2;
a = a - 1;
console.log("La var a doit contenir 1 : a = " + a);
a++;
console.log("La var a doit contenir 2 : a = " + a);

// déclaration de b
var b = 8;
console.info(b);

b += 2;// ajoute 2 et affecte le résultat
console.log("La var b doit contenir 10 : b = " + b);

// déclaration de c
var c = a + b * b;//
console.log("La var c doit contenir 102 : c = " + c + " (la multiplication est prioritaire)");
console.info(c);

// déclaration de d
var d = a * b + b;
console.log("La var d doit contenir 30 : d = " + d);
console.info(d);

// e
var e = a * (b + b);
console.log("La var e doit contenir 40 : e = " + e);
console.info(e);

// f
var f = a * b / a;
console.log("La var f doit contenir 10 : f = " + f);
console.info(f);

// g
var g = b / a * a;
console.log("La var g doit contenir 10 : g = " + f);
console.info(g);