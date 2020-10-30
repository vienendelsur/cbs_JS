// .js pour la page if
// condition if
let x = 4;
let y = 0;


if(x > 1){// TEST true ? -> la condition ou le test est évalué à true 
    alert('x contient une valeur supérieure à 1');// BLOC DE CODE si c'est true on exécute ce bloc de code
}

if(x == y){
    alert('x et y contiennent la même valeur');
}

if(y){// l'alerte ne s'affiche pas car la valeur de y contient 0, qui est une des valeurs qui renvoie false (cf. la liste ds la page .html)
    alert('La valeur de y est évalué à true');// puisque c'est faux on n'exécute pas
}

// Inversion du test logique > vérifier que c'est faux


if((x > 1) == false){//au lieu de vérifier que le test est vrai on va vérifier qu'il est faux
    alert('x contient une valeur inférieure à 1');
}

if((x == y) == false){
    alert('x et y ne contiennent pas la même valeur');
}

// VOIR 