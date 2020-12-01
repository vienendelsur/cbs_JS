//ni oui ni non

// alert('test');

var disMoi = ''; // initialisation de la variable avec une string vide, on y rentrera la réponse de l'utilisateur 
console.log(typeof disMoi, disMoi);
var i = 1;

// tant que le prompt ne contient pas oui ET ne contient pas non, boucle
while ((disMoi !== 'oui') && (disMoi !== 'non')) {
    disMoi = prompt('On joue au ni oui ni non ?? Allez !');
    i++;//une boucle a besoin de nombre de tours
}

document.write('<p>Perdu </p>');

// 