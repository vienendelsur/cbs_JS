//
alert('Bienvenue dans le jeu !');

// on doit trouver un nombre au hasard que l'utilisateur doit deviner en 3 étapes
// 1- le nombre
let nombreAuHasard = Math.random();// nombre décimal entre 0 et 1
console.log(typeof nombreAuHasard, nombreAuHasard);

// 2- on multiplie le nombre trouvé par 100
let nombreX100 = nombreAuHasard * 100;
console.log(nombreX100);

// 3- on arrondi le nombre
let nombreArrondi = Math.floor(nombreX100);//Math.floor arrondi un nombre décimal au nombre inférieur
console.log(nombreArrondi);

// 2 et 3 autre solution pour arrondir le nombre
// nombreX100 = parseInt(nombreAuHasard * 100);
// console.log(nombreX100);

// suite de l'exo