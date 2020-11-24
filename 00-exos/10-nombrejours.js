
var mois = parseInt(prompt('Quel mois choisissez-vous', 'n° du mois, entre 1 et 12'));

var moisNom = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(moisNom);
console.log(moisNom[4]);
console.info(moisNom.length);
var numMois = moisNom.indexOf('mai');
console.log(numMois);

if (isNaN(mois)) {//si ce n'est pas un number 
        document.getElementById('p1').innerHTML = 'Votre choix n\'est pas un chiffre.';//fait ça 
    } else { /* sinon c'est un nombre */
            if (mois === 2) {//un nombre égal à 2 etc...
                // document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 28 jours.';

                document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ' fait 28 jours.'

            } else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)) {// OU à 4 OU à 6 etc...
                // document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 30 jours.';

                document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ' fait 30 jours.'

            } else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) {
                // document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' de l\'année fait 31 jours.';

                document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ' fait 31 jours.'

            } else {
                document.getElementById('p1').innerHTML = 'Votre choix de numéro, le ' + mois + ' n\est pas dans le calendrier ! ';
        }
    }//fin du if else principal


