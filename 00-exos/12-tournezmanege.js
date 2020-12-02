// alert('test');

// 1- boucle WHILE
var manege = 0;
console.log(typeof manege, manege);

while (manege < 10) {
    manege++;
    document.write('Avec une boucle while ; c\'est le tour n°' + manege + '<br>');
}

document.write('<hr>');

for (let i = 1; i <= 10; i++) {//ici on initialise i à 1 ; i prend la valeur 1 boucle une 1ère fois et incrémente ensuite (jusqu'à 10)
    document.write('Avec une boucle for ; c\'est le tour n°' + i + '<br>');
}

document.write('<hr>');

/* 2-- boucle WHILE */
var question = parseInt(prompt('Combien de tours voulez-vous ?'));

var compteur = 1;
while (compteur <= question) {
    document.write('c\'est le tour n°' + compteur + '<br />');
    compteur++;
}

document.write('<hr />');

/* 2-- boucle FOR */
var nbTours = parseInt(prompt('Combien de tours à faire ?'));

for (var tour = 1; tour <= nbTours; tour++) {
    document.write('c\'est le tour n°' + tour + '<br />');
}