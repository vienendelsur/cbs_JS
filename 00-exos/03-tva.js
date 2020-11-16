//TVA 


var horsTaxe = prompt("Prix HT :");

console.log("Le prix TTC est de : " + (horsTaxe * 1.2 + ' €.'));

document.getElementById('resultat').innerHTML = ('Résultat : Prix ' + horsTaxe + ' € HT  pour un total de ' + (horsTaxe * 1.2) + ' € TTC');
// document.getElementById('resultat').innerHTML = ('coucou');