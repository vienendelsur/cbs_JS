//joursuivant.html


var jour = prompt("1- Quel jour sommes-nous ? (avec un if)");

if (jour === "lundi") {/* ... lundi ... */
} else if (jour === "mardi") {/* ... mardi ... */
    document.getElementById('p1').innerHTML = "Demain nous serons mercredi...";
} else if (jour === "mercredi") {/* ... mercredi ... */
    document.getElementById('p1').innerHTML = "Demain nous serons jeudi...";
} else if (jour === "jeudi") {/* ... jeudi ... */
    document.getElementById('p1').innerHTML = "Demain nous serons vendredi...";
} else if (jour === "vendredi") {/* ... vendredi ... */
    document.getElementById('p1').innerHTML = "Bon week-end !");
} else if (jour === "samedi") {/* ... samedi ... */
    document.getElementById('p1').innerHTML = "Demain nous serons dimanche...";
} else if (jour === "dimanche") {/* ... dimanche ... */
    document.getElementById('p1').innerHTML = "Bon courage pour demain ;-)";
} else {/* ... autres cas ... */
    document.getElementById('p1').innerHTML = "Ce jour est inconnu...";
}

document.write('<p>*****</p>');

var jour2 = prompt("2- Quel jour sommes-nous ? (avec switch)");

switch (jour2) {
    case 'lundi':
        document.write("Demain nous serons mardi...");
        break;
    case 'mardi':
        document.write("Demain nous serons mercredi...");
        break;
    case 'mercredi':
        document.write("Demain nous serons jeudi...");
        break;
    case 'jeudi':
        document.write("Demain nous serons vendredi...");
        break;
    case 'vendredi':
        document.write("Bon week-end ! ");
        break;
    case 'samedi':
        document.write("Demain nous serons dimanche...");
        break;
    case 'dimanche':
        document.write("Bon courage pour demain ;-)");
        break;
    default:
        document.write("Ce jour est inconnu...");
}
