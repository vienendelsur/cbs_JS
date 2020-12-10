let nbLigne = 10;

for (let i = 0; i < nbLigne; i++) {
    let etoile = '';
    let espaces = '';
    for (let col = 0; col < nbLigne - (i + 1); col++) {
        espaces += ' ';
    }
    for (let col = 0; col < 2 * i + 1; col++) {
        etoile += '*';
    }
    console.log(espaces + etoile);
}

for (let i = 0; i < nbLigne; i++) {
    let etoile = '';
    let espaces = '';
    for (let col = 0; col < nbLigne - (i + 1); col++) {
        espaces += ' ';
    }
    for (let col = 0; col < 2 * i + 1; col++) {
        etoile += '*';
    }
    document.getElementById('p1').innerHTML += espaces + etoile + '<br>';
}