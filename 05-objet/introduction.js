// JS pour l'introduction aux objets

// alert('coucou');

let auteur = 'Victor Hugo';

// ici on a une variable-objet tout simplement un objet
let utilisateur = {

    // nom, age et email sont des propriétés de l'objet utilisateur
    nom : ['Victor', 'Marie', 'Hugo'],// ici nous avons des propriétés qui sont dans un tableau, un "array" qui commence à 0 !!
    age : 2,
    email : 'totor@hugo.com',
    adresse : 'à Paris dans son avenue',

    // une méthode un peu comme une fonction

    bonjour: function() {
        alert('J\'ai ' + this.age + ' ans et mon nom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2] + '.');
    }

}

console.info(typeof utilisateur);// on dira que c'est un objet 

utilisateur.bonjour();// ici on affiche 

