// les fonctions introduction

// exemple la fonction random() "aléatoire"

document.getElementById('p1').innerHTML = Math.random();// ici on exécute le code "caché" derrière la fonction, on appelle la fonction ou on l'invoque

console.log(Math.random());



//replace()
let discours1 = 'Bonjour, je suis Donald Trump, et j\'ai gagné !';
    // console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Kamala Harris');// le nom d'une fonction est suivi d'un couple de parenthèses qui contiennent les plus souvent des arguments
document.getElementById('p2').innerHTML = discours2;


// création de fonctions
//1- multiplier le résultat de random() par 100
function randomX100() {
    return Math.random() * 100;
}

// console.log(randomX100());
document.getElementById('p3').innerHTML = randomX100();

//2- une simple multiplication

function multiplier(nbr1,nbr2) {//les paramètres de notre fonction
    // return (nbr1 * nbr2);
    return ('Multiplions ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2) );
}

// console.log(multiplier(2,6));
document.getElementById('p4').innerHTML = multiplier(145,9);//la fonction et les arguments

// soustraction 
function soustraire(nbr1,nbr2) {
    // return (nbr1 * nbr2);
    return ('Soutraction de ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2) );
}
console.log(10,6);
// division
// addition
// modulo

function modulo(mod1, mod2) {
    return ('Le reste de la division euclidienne, ou le modulo en JS, de ' + mod1 + ' par ' + mod2 + ' est égal à ' + (mod1 % mod2));
}

console.log(modulo(30,3));