// page de l'exo 14 saisie

// alert('coucou');

var nombre = 0; // Valeur initiale permettant d'entrer dans la boucle
console.log(nombre + ' > variable d\'initialisation');


while ((nombre < 50) || (nombre > 100)) {
    nombre = Number(prompt('Entrez un nombre entre 50 et 100 : '));
}

console.info(nombre + ' > variable récupérée');