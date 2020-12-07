var jeu = ["pierre", "feuille", "ciseau"]; // Array
console.log(typeof jeu, jeu);

// var temp1 = Math.random()*jeu.length;
// console.log(temp1);

// var temp2 = Math.floor(temp1);
// console.log(temp2);

// var temp3 = jeu[Math.floor(temp2)];
// console.log(temp3);

var randomItem = jeu[Math.floor(Math.random()*jeu.length)]; // génère de manière aléatoire une des valeurs contenues dans l'Array jeu.
console.log(randomItem);

var user = prompt('Pierre, feuille ou ciseau ?').toLowerCase();

for(var i = 0; i <= 1; i++){ // nombre de tours
    if(user === jeu[0]){ // si l'user choisit pierre
        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
        }else{
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
        }// fin du if user choisit pierre
    }else if (user === jeu[1]){ // si l'user choisit feuille
        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
        }else{
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
        }//fin du if si user choisit feuille
    }else if(user === jeu[2]){// si l'user choisit ciseau
        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
        }else{
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
        } // fin du if user choisit ciseau
    }else{
        document.getElementById('p1').innerHTML = 'Votre saisie est incorrecte.';
    } // fin du if principal
} // fin de la boucle for