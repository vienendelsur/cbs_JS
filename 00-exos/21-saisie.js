//
'use strict';

// alert('coucou !');

// let votreSaisie;
// // console.log(typeof votreSaisie, votreSaisie);

// do {
//     votreSaisie = Number(prompt('Merci de saisir un nombre entier ou décimal.'))
// } while ((isNaN (votreSaisie) == true) || votreSaisie === 0);
//  document.getElementById('p1').innerHTML =  'Vous avez saisi le nombre suivant ' + votreSaisie + ' - et c\'est bien un nombre.'; 

//  console.log(typeof votreSaisie, votreSaisie);

//correction avec un if else
let utilisateurPrompt = prompt('avec if else');

if (utilisateurPrompt.includes('a') || utilisateurPrompt.includes('b') || utilisateurPrompt.includes('c') || utilisateurPrompt.includes('d') || utilisateurPrompt.includes('e') || utilisateurPrompt.includes('f') || utilisateurPrompt.includes('g') || utilisateurPrompt.includes('h') || utilisateurPrompt.includes('i') || utilisateurPrompt.includes('j') || utilisateurPrompt.includes('k') || utilisateurPrompt.includes('l') || utilisateurPrompt.includes('m') || utilisateurPrompt.includes('n') || utilisateurPrompt.includes('o') || utilisateurPrompt.includes('p') || utilisateurPrompt.includes('q') || utilisateurPrompt.includes('r') || utilisateurPrompt.includes('s') || utilisateurPrompt.includes('t') || utilisateurPrompt.includes('u') || utilisateurPrompt.includes('v') || utilisateurPrompt.includes('w') || utilisateurPrompt.includes('x') || utilisateurPrompt.includes('y') || utilisateurPrompt.includes('z')) {
    document.write('Incorrect');
} else if (utilisateurPrompt.includes('.')) {
    utilisateurPrompt = utilisateurPrompt.replace('.', ',');
    document.write('Votre nombre est : ' + utilisateurPrompt);
} else {
   document.write('Votre nombre est : ' + utilisateurPrompt);
}