// les scripts pour l'intro sur les variables 
// mon second fichier JS
// création de 3 variables, cependant elles ne stockent pas de valeurs
// let prenom;
// let monAge;

// var ville;
// on déclare une variable et on l'initialise en même temps
let prenom = 'Jean';//une chaîne de caractères

/* Pour initialiser une variable on utilise l'opérateur = CE N'EST LE SIGNE EGAL !!! 
c'est un opérateur d'affectation */

// Autre moyen d'initialiser une variable 
let monAge;
monAge = 40; // un chiffre ! pas besoin de ''

console.log(prenom);
console.log(monAge);

prenom = 'Justine';
monAge = 25;

console.log(monAge);

// ceci fonctionne 
nom = 'Duras';
var nom;

console.log(nom);

//ceci ne fonctionne pas !!!
// ville = 'Suresnes';
// let ville;

let ville;
ville = 'Suresnes';

console.log(ville);

// avec prompt() on a une fenêtre avec un champ de saisie
// prompt();

// redéclaration des variables

//ceci fonctionne
var chien = 'Médor';
var chien = 'Max';

console.log(chien);

// ceci ne fonctionnera pas

// let chat = 'minou';
// let chat = 'obi-wan';
