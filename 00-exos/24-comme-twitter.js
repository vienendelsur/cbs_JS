// alert('coucou')

let textarea = document.querySelector('#tweetContenu');
console.log(textarea);

let compteur = document.querySelector('#compteur');
console.log(compteur);

// la fonction va calculer la longueur de la chaîne de caractères contenue dans le texte-area
function compte() {
    let nbrCaracteres = 140 - textarea.value.length;
    compteur.innerHTML = 'Il reste ' + nbrCaracteres + ' caractères';

    if (nbrCaracteres < 0) {
        // console.log(compte);
        compteur.classList.remove("bg-warning");
        compteur.classList.add("bg-danger", "text-white");
        compteur.textContent = " Trop de caractères ! Vous devez en retirez " + nbrCaracteres;
        let nbrPositif = Math.abs(nbrCaracteres);
        compteur.textContent = " Trop de caractères ! Vous devez en retirez " + nbrPositif;
    } else if (nbrCaracteres >= 0) {
        compteur.classList.remove("bg-danger");
        compteur.classList.add("bg-warning");
    } else {
        //sinon rien
    }
}//fin fonction

// on pose un écouteur d'évènement avec keyup sur le textarea
textarea.addEventListener('keyup', compte);

//on appelle la fonction
compte();

