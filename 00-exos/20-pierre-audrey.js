// ne pas oublier dans le HTML <button onclick="PFC()">Commencer le jeu</button>


var egale = "égalité";
var win = "gagné";
var lose = "perdu";
var nbrUser = 0;
var nbrIA = 0;
function PFC( player, iA ) {
    while (nbrUser < 2 && nbrIA < 2) {
        var player = prompt("pierre, feuille ou ciseaux ?").toLowerCase();
        var iA = Math.random()*90;
        // player = (player.toLowerCase());
        if (player === "pierre") {
        } else if (player === "feuille") {
        } else if (player === "ciseaux") {
        } else {
            alert("entrez pierre, feuille ou ciseaux !!");
        }
        if (iA <= 30) {
            iA = "pierre";
        } else if (iA <= 60 && iA > 30) {
            iA = "feuille";
        } else if (iA <= 90 && iA > 60) {
            iA = "ciseaux";
        }
        // console.log("vous: " + player + ", l'ordinateur: " + iA);
        alert("vous: " + player + ", l'ordinateur: " + iA);
        if (player === iA) {
            document.getElementById('p1').innerHTML = ( "Vous êtes à " + egale);
        } 
        else if ((player == "ciseaux") && (iA == "pierre" )){
            document.getElementById('p1').innerHTML = ("Vous avez " + lose);
            nbrIA++;
        } 
        else if ((player == "ciseaux") && (iA == "feuille")){
            document.getElementById('p1').innerHTML = ("Vous avez " + win);;
            nbrUser++;
        } 
        else if ((player == "pierre") && (iA == "ciseaux")){
            document.getElementById('p1').innerHTML = ("Vous avez " + win);;
            nbrUser++;
        } 
        else if ((player == "pierre") && (iA == "feuille")){
            document.getElementById('p1').innerHTML = ("Vous avez " + lose);
            nbrIA++;
        } 
        else if ((player == "feuille") && (iA == "ciseaux")){
            document.getElementById('p1').innerHTML = ("Vous avez " + lose);            
            nbrIA++;
        } 
        else if ((player == "feuille") && (iA == "pierre")){
            document.getElementById('p1').innerHTML = ("Vous avez " + win);;
            nbrUser++;
        }
        console.log(nbrUser + " - " + nbrIA);
        alert(nbrUser + " - " + nbrIA);
    } // fin de while
 } // fin de fonction PFC

