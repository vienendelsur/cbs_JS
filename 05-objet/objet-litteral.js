// nouvel objet
// victor EST un objet
let victor =  {
    //nom, age, email sont des propriétés
    nom : ['Victor', 'Hugo'],
    age : 2,
    email : 'totor@hugo.com',

    //bonjour est une méthode de l'objet victor
    bonjour: function() {
        alert('Bonjour je suis ' + this.nom[0] + ' j\'ai ' + this.age + ' ans.');
    }
}


victor.bonjour();
console.log(typeof victor);
// on accède aux propriétés nom et age qui contiennent des valeurs
document.getElementById('p1').innerHTML =  'Nom : ' + victor.nom;
document.getElementById('p2').innerHTML =  'Age : ' + victor.age + ' ans';

//on modifie la valeur de age 
victor.age = 80;

document.getElementById('p3').innerHTML =  'Nouvel âge : ' + victor.age + ' ans';

// victor.bonjour();
// on rajoute une propriété et une valeur associée
victor.metier = 'écrivain, dramaturge et poète';

// et on crée une nouvelle méthode
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age + ' ans, je suis ' + this.metier + ' célèbre dans le monder entier.');
}

victor.bonjour2();


document.getElementById('p4').innerHTML =  'Bonjour je suis ' + victor.nom[0] + ' ' + victor.nom[1] + '.';