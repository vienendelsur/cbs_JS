// triangle dans la console avec deux boucles 

console.log('Le triangle avec une boucle for');

let diese = '';

// console.log(typeof diese, diese);

for (let i = 1;  i < 10; i++) {
    diese += '#';
    console.log(diese);
}

console.log('Le triangle avec une boucle for, et la fonciton repeat() correction Baroude');

// cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat

for (i = 0; i < 10; i++) {
    console.log('#'.repeat(i));
}

// avec une boucle while 

console.log('Le triangle avec une boucle while');
let diese2 = '';
let w1 = 1;

// while (w1 <=10) {
//     diese2 += '#';
//     console.log(diese2);
//     w1++;
// }

while (w1 <=10) {
    // diese2 += '#';
    diese2 = diese2 + '#.';
    console.log(diese2);
    w1++;
}
