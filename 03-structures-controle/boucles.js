// pages sur les boucles

// alert('coucou');

// INTRO 
// incrémentation et décrémentation

let a = 10, b = 10, c = 20, d = 20;
// console.log(a);
// a++ va incrémenter APRES a de 1, il ajoute 1 après
// a stocke la valeur 10 jusqu'à son incrémentation
document.getElementById('p1').innerHTML = 'a contient la valeur ' + a + ', là je post-incrémente de 1, ce qui fait que a est toujours égal à ' + a++ + ' et donc a sera égal à ' + a;

// console.log(b);

document.getElementById('p2').innerHTML = ' b contient la valeur ' + b + ' là je pré-incrémente de 1, ce qui fait que maintenant b contient ' + ++b;

// console.log(c);

document.getElementById('p3').innerHTML = 'c contient la valeur ' + c + ', là je post-décrémente de 1, ce qui fait que c est toujours égal à ' + c-- + ' et donc après c sera égal à ' + c ;

// console.log(c);

document.getElementById('p4').innerHTML = 'd contient la valeur ' + d + ', là je pré-décrémente de 1, et donc d est égal à ' + --d;

// boucle while

let w1 = 0;// la variable de départ

while ( w1 < 10 ){//tant que c'est vrai le test ou la condition
    // += rajoute de nouveau la chaîne de caractères tant que la boucle n'est pas terminée
    document.getElementById('while1').innerHTML += ' w1 contient la valeur ' + w1 + '<br>'; 
    w1++;// incrémente la valeur de la variable de départ
}

// dans le p while2 
let w2 = 10;
//boucler tant que w2 est inférieur à 10
while ( w2 < 10 ) {
    document.getElementById('while2').innerHTML += 'Oyez oyez ! w2 contient la valeur ' + w2 + '<br>';
    w2++;
}

// on va faire la même avec do... while "faire ... tant que" 
let w3 = 10;
do {// fait
    document.getElementById('while3').innerHTML += 'Voyez ! w3 contient la valeur ' + w3 + '<br>';
    w3++;
}
while ( w3 < 10 ) //tant que le test est vrai 