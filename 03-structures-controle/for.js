// page for pour

// alert('coucou');

for (let i = 0; i < 10; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i + ' à chaque passage, de la boucle.<br>';
}

for (let i = 0; i < 180; i++) {// for (1- initialisation de la variable 2- test ou condition de sortie 3- incrémentation)
    document.getElementById('tr1').innerHTML += '<tr><td>passage n° ' + (i + 1) + ' de la boucle</td><td>i contient la valeur ' + i + ' qui est incrémenté à chaque passage de la boucle.</td></tr>';
}
// console.log(i);

// root
// i = itérator = curseur 