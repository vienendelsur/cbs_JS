// alert('test');
var moyenne = parseFloat(prompt('Quelle est ta moyenne au Bac ?'));

console.log(moyenne);

console.log(typeof(moyenne));


if (moyenne < 10) { // inférieure à 10
        document.getElementById('p1').innerHTML = 'Tu as eu ' + moyenne + ' Tu es recalé :-('; // recalé
    } else if ((moyenne >= 10) && (moyenne < 12)){ // entre 10 et 12
        document.getElementById('p1').innerHTML = 'Tu as eu ' + moyenne + ' Tu passes !'; // le candidat passe
    } else if ((moyenne >= 12) && (moyenne <= 20)) { // supérieure à 12 et inférieur ou égal à 20
        document.getElementById('p1').innerHTML = 'Tu as eu ' + moyenne + ' Bravo pour la mention :-)'; // mention
    } else { // en cas de saisie ne rentrant pas dans les cas ci-avant
        document.getElementById('p1').innerHTML = 'Il aurait fallu réviser plus ;-)';// n'a pas saisi ce que l'on lui demandait
};

//SOLUTION DE BAROUDE
// AVEC UNE FONCTION

let moy = parseFloat(prompt('Quelle est ta moyenne au bac ? ')); // le parsefloat permet d'assurer que la réponse sera considéré comme un "number", dans le cas d'un nombre décimal
console.log(typeof(moy));
function baccalaureat(moy){
    if ( (!isNaN(moy))) { // est bien un nombre ??
        if(moy >= 0 && moy <= 10 ){
            document.getElementById('p2').innerHTML = 'Tu es recalé !';
        }else if(moy >= 10 && moy <= 12){
            document.getElementById('p2').innerHTML = 'Tu passes !';
        }else if(moy > 12 && moy <= 20){
            document.getElementById('p2').innerHTML = 'Bravo pour la mention ! :) ' ;
        }else {
            document.getElementById('p2').innerHTML = 'Votre nombre doit être compris entre 0 et 20! :) '; 
        }
    }else{
        return document.getElementById('p2').innerHTML = 'Yahoooo! es tu sûr de ce cela ?' ;
    }
}
baccalaureat(moy);