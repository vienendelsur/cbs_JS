// les fonctions introduction

// exemple la fonction random() "aléatoire"

document.getElementById('p1').innerHTML = Math.random();

//replace()
let discours1 = 'Bonjour, je suis Donald Trump, et j\'ai gagné !';
    console.log(discours1);
let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
document.getElementById('p2').innerHTML = discours2;
