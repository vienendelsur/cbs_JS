// alert('test');

// EXO 1
var nombre1 = Number(prompt('Choisis un 1er nombre :'));
console.log(typeof nombre1, nombre1);


for (var i = 1; i <=10; i++) {//1- initialisation de la variable; 2- test ou condition de sortie; 3- incrémentation
    var resultat = nombre1 * i;    // on fait l'opération avant et on la passe en variable
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + resultat + '<br>';//le nombre1 à chaque passage FOIS la variable i = la variable résultat
}

for (var i = 1; i <=10; i++) { 
    document.getElementById('p1').innerHTML += nombre1 + ' x ' + i + ' = ' + nombre1 * i + '<br>';//on fait l'opération dans la bloce de code
}


let numberUser = prompt('Incrivez un nombre pour afficher sa table de multiplication');
    for(var i = 1; i <= 10; i++) { //boucle de 1 a 10
        document.getElementById('table1').innerHTML += numberUser + ' x ' + i + ' = ' + numberUser*i + '<br>'; //Multiplie le nombre demander de 1 a 10
} //fin de boucle numberUser