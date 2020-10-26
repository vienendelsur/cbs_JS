// .js pour la page types de données

// 1- STRING
let presentation = "Je m'appelle Michaël.";
// let presentation = 'Je m\'appelle Michaël.';
let age = 25;
let age2 = 60;

// console.log de la variable presentation
console.log(typeof presentation);

//1- récupérer dans le document un élément dont l'id est p1
//2- remplacer le contenu d'un élément identifié par son attribut id
//3- puis on concatène une string et le résultat de la fonction typeof()
//4- le résultat s'afffiche dans la page
document.getElementById('p1').innerHTML = 'Type de données pour la variable présentation : ' + typeof presentation;

document.getElementById('p2').innerHTML = 'Type de données pour la variable age : ' + typeof age;

document.getElementById('p3').innerHTML = 'Type de données pour la variable age2 : ' + typeof age2;

let phrase = 'Mon film préféré est "20000 lieues sous les mers".';

console.log(phrase);

// 2- NUMBER 

let x = 10;
let y = -20000;
let z = 3.14;

console.log(z);
// 2 arguments dans le console.log 
console.log(typeof x, z);

//3- BOOLEAN (booléen)

// vrai = true
// faux = false

let test = 8 > 4;

console.log(typeof test, test);

//4- NULL and UNDEFINED

let arbre;

console.log(typeof arbre);

let nul = null;
let indefini;


document.getElementById('p4').innerHTML = 'Le type de la variable nul est : ' + typeof nul;

document.getElementById('p5').innerHTML = 'Le type de la variable indefini est : ' + typeof indefini;