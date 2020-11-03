// page sur les ternaires

let x = 15;
let y = -20;

// faire un if else pour vérifier si x est sup. ou égal à 10
// condition classique 

if ( x >= 10 ) {
    document.getElementById('p1').innerHTML = 'x est supérieur ou égal à 10';
} else {
    document.getElementById('p1').innerHTML = 'x est inférieur à 10';
}

//la même condition en ternaire // ? = if : = else
document.getElementById('p2').innerHTML =
x >= 10 ? 'x supérieur ou égal à 10' : 'x est inférieur à 10';

if ( y > 10 ) {
    document.getElementById('p3').innerHTML = 'y est supérieur à 10';
} else {
    document.getElementById('p3').innerHTML = 'y est inférieur à 10';
}

//la même condition en ternaire // ? = if : = else
document.getElementById('p4').innerHTML =
y > 10 ? 'y est supérieur à 10' : 'y est inférieur à 10';