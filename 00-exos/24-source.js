// alert('coucou');

// on passe en variable le textarea et on crée une variable sur paragraphe dont l'id est compteur
let textarea = document.querySelector('#tweetContenu');
console.log(textarea);

let afficheTotal = document.getElementById('compteur');
console.log(compteur);


// création de la fonction 
function compte() {// nom compte()
    // cette fonction calcule la longueur de la chaîne de caractère contenue dans le textarea
    let compte = 140 - textarea.value.length;
    // et elle affiche ce compte dans le p (au début il est à 140)
    afficheTotal.innerHTML = compte + ' caractères';

    // dans la fonction on contrôle si ... 
        if (compte < 0) {// le compte est en dessous de 140
            console.log(compte);
            afficheTotal.classList.add("bg-danger");   
            afficheTotal.classList.add("text-white");
            afficheTotal.classList.remove("bg-warning");
            afficheTotal.textContent ="Trop de caractères !";
        } else if (compte >= 0) {// si on efface le contenu le compte est au dessus
            afficheTotal.classList.remove("bg-danger");
            afficheTotal.classList.add("bg-warning");
        } else {
            //sinon rien ...
    }
}//fin fonction 

// on pose un écouteur d'évènement keyup sur le texte area
// on déclanche la fonction compte()quand l'évènement se produit et au chargement de la page
textarea.addEventListener('keyup', compte);
compte();