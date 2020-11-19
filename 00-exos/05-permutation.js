var nombre1 = 5;
var nombre2 = 3;

console.log('DÉPART >> n1 = ' + nombre1);
document.write('<h3>Résultat du programme </h3> <p>DÉPART >> nombre1 = ' + nombre1);

console.log('DEPART >> nombre2 = ' + nombre2);
document.write('<p>DÉPART >> nombre2 = ' + nombre2 +'</p>');

var tmp = nombre1;
nombre1 = nombre2;
nombre2 = tmp;

console.log('________');
document.write('******');

console.log('ARRIVÉE >> nombre1 = ' + nombre1);
document.write('<p>ARRIVÉE >> nombre1 = ' + nombre1 + '</p>');

console.log("ARRIVÉE >> nombre2 = " + nombre2);
document.write('<p>ARRIVÉE >> nombre2 = ' + nombre2 + '</p>');

///
// JS pour la page permutation
// Permutation de variable de type number
// var nombre1 = 10;
// var nombre2 = 7;
// document.getElementById('p1').innerHTML = ( ' nombre1 est egale à ' + nombre1)
// document.getElementById('p2').innerHTML = ( ' nombre2 est egale à ' + nombre2)
// nombre1 = nombre1 + nombre2; // J'additionne la 1ère variable à la 2ème variable
// nombre2 = nombre1 - nombre2; //  On retrouve grâce à cette opération la nouvelle valeur de nombre1 que l'on passe dans nombre2.
// nombre1 = nombre1 - nombre2; // Pour retrouver la valeur d'origine de nombre2, on fait l'opération inverse que l'on affecte a nombre1.
// document.getElementById('p3').innerHTML = ( ' nombre1 est egale à ' + nombre1)
// document.getElementById('p4').innerHTML = ( ' nombre2 est egale à ' + nombre2)
// console.log(nombre2)
// console.log(nombre1)
