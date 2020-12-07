//pierre feuille ciseau 


// Le mode strict apporte quelques changements à la sémantique « normale » de JS:
// Le mode strict élimine quelques erreurs silencieuses du JS en les changeant en erreurs explicites (une exception sera levée).
// Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
// Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

'use strict';

// confirm('coucou');
// 1- INITIALISATION DES VARIABLES
var choixOrdinateur;
var choixJoueur = '';
var random;

// 2- PROMPT() POUR POSER LA QUESTION A L'UTILISATEUR
// 'window est implicite'
choixJoueur = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?').toLowerCase();// pas de différence avec prompt() et toLowerCase() met le terme en minuscules

console.log(typeof choixJoueur, choixJoueur);

// 3- pour le choix de l'ordinateur on va utiliser un nombre en alétaoire et affecter à ce nombre un des mots à choisir...

random = Math.random();
console.log(typeof random, random);


// 4- on fait un if else if pour choisir le nombre 

if (random <= 0.33) {
        choixOrdinateur = 'pierre';
    } else if (random <= 0.66) {
        choixOrdinateur = 'feuille';
    } else {
        choixOrdinateur = 'ciseau';
}// fin if else choix du mot au hasard par l'ordinateur
console.log(typeof choixOrdinateur, choixOrdinateur);

// 5-  puis if si ils ont choisi la même chose 

if (choixJoueur == choixOrdinateur) {
    document.write('Egalité');
} else {// le choix est différent >>>> un switch
   switch(choixOrdinateur) {
    case 'ciseau':// choix ordi
            if (choixJoueur == 'pierre') {
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            } else {// de facto le joueuer a forcément choisi feuille 
                document.write('<p>Les ciseaux coupent la feuille : vous perdez !</p>');
            }
            break;

        case 'feuille':// choix ordi
            if (choixJoueur == 'pierre') {
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            } else {// de facto le joueuer a forcément choisi ciseau 
                document.write('<p>Les ciseaux coupent la feuille : vous gagnez !</p>');
            }
            break;

        case 'pierre':
            if(choixJoueur == 'feuille') {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            } else {// choixJoueur == 'ciseau'
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
            break;

   }//fin du switch
} // fin du if