//page sur la portée des variables

//deux variables globales
let x = 5;
var y = 10;

function portee1() {//1ère fonction avec des variables globales
    document.getElementById('p1').innerHTML = 'Depuis portee1() : x = ' + x + ' y = ' + y ;
}


function portee2() {//2nde fonction qui définit des variables locales
    let a = 1;
    var b = 2;
    document.getElementById('p2').innerHTML = 'Depuis portee2() : a = ' + a + ' b = ' + b ;
}

function portee3() {//une 3ème fonction avec de nouveau des locales qui portent le même nom que les globales
    let x = 20;//bien qu'elles portent le même nom que les globales ce sont 2 entités différentes
    var y = 40;// la fonction va donc utiliser les locales
    document.getElementById('p3').innerHTML = 'Depuis portee3() : x = ' + x + ' y = ' + y ;
}
portee1();
portee2();
portee3();

//on tente d'afficher les globales
document.getElementById('p4').innerHTML = '<em>Ce code n\'est pas dans une fonction </em> : Depuis l\'espace global : x = ' + x + ' y = ' + y ;

//on tente d'afficher les locales
//<em>Le message dans la console qui sera généré par cette ligne est normal </em>
document.getElementById('p5').innerHTML = 'Depuis l\'espace local : a = ' + a + ' b = ' + b ;

