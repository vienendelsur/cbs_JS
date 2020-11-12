//page 04-05-conclusion.html

// on va créer une fonction anonyme, qui n'a pas de nom

// function () {
//     alert('Alerte exécutée par une fonction anonyme');
// }

// ???? comment appeler ma fonction si elle n'a pas de nom ?
//je la passe en variable
let alerte = function () {
    alert('Alerte exécutée par une fonction anonyme');
}
//toujours "appeler" la fonction anonyme sinon erreur dans la poursuite du script
alerte();

//auto-invocation d'une fonction anonyme
// cela ne fonctionne pas
// function () {
//     alert('Alerte !!!! Seconde exécution d\'une fonction anonyme');
// }

(function () {
    alert('Alerte !!!! Seconde exécution d\'une fonction anonyme');
})();

// (on met la fonction dans ce couple de parenthèses)(); suivie d'un couple de parenthèses

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

// au déclenchement d'un évènement 

// function() {
//     alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
// }

let paragraphe1 = document.getElementById('p1');

paragraphe1.addEventListener('click', function() { 
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !');
});

let paragraphe2 = document.getElementById('p2');

paragraphe2.addEventListener('click', function() { 
    alert('Et là tu as bien cliqué sur le paragraphe 2 !');
});

// fonction récursive

function decompte(t) {
    if (t > 10){
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 10);
    } else {
        return t;
    }//fin if else
}//fin function

decompte(1000);