// alert('test');
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' est pair.');
    }
}

// EXO  1
console.log('Exo 1');
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {// si i est pair
         console.log( i + ' est pair');
    } else {// sinon si i est impair
        console.log( i + ' est impair');
    }
}
document.write('<hr>');


// EXO 2 FOR
var nbUtilisateur = parseInt(prompt('Exo 2 : Rentre un nombre entier.'));
// console.log(typeof nbUtilisateur, nbUtilisateur);

var nbUtilisateurMax = (nbUtilisateur + 10);
// console.log(typeof nbUtilisateurMax, nbUtilisateurMax);

for (var i = nbUtilisateur; i < nbUtilisateurMax; i++) {
    if (i % 2 === 0) {
        document.write('<p>' + i + ' est pair.</p>');
    } else {
        document.write('<p>' + i + ' est impair.</p>');
    }
}

document.write('<hr>');
// avec while maintenant 

var chiffre = Number(prompt('EXO 3 ; choississez un nombre entier'));
// console.log(chiffre);

var chiffreMax = (chiffre + 10);
// console.log(chiffreMax);

while (chiffre <= chiffreMax) {
    if (chiffre % 2 === 0) {
        document.write(chiffre + ' est pair<br>');
    } else {
        document.write(chiffre + ' est impair<br>');
    }
    chiffre++;
}


