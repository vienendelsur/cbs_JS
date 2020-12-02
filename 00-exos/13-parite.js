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

let nbrUtilisateur = parseInt(prompt('Exo 2 : Rentre un nombre entier, fissa !'));//parsInt on est sûr que c'est un entier avec Number() on risque d'avoir un décimal 
console.log(typeof nbrUtilisateur, nbrUtilisateur);

let nbrUtilisateurMax = (nbrUtilisateur + 1000);
console.log(typeof nbrUtilisateurMax, nbrUtilisateurMax); 

for (let i = nbrUtilisateur; i <= nbrUtilisateurMax; i++) {
    if (i % 2 === 0) {// si i est pair
         document.write('<p>' +  i + ' est pair</p>');
    } else {// sinon si i est impair
        document.write('<p>' +  i + ' est impair</p>');
    }
}


















document.write('<hr>');

// // var chiffre = parseInt(prompt('Choississez un nombre entier'));
// var nbUtilisateur2 = parseInt(prompt('Exo 3 : Choisis un nombre entier'));
// var chiffreMax = (nbUtilisateur2 + 10);
// while (nbUtilisateur2 <= chiffreMax) {
//     if (nbUtilisateur2 % 2 === 0) {
//         document.write('<h4>' + nbUtilisateur2 + ' est pair</h4>');
//     } else {
//         document.write('<h4>' + nbUtilisateur2 + ' est impair</h4>');
//     }
//     nbUtilisateur2++;
// }
