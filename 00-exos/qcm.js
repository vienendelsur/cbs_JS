var nb1 = parseInt(prompt('1er nombre'));
var nb2 = parseInt(prompt('2ème nombre'));

if ( (!isNaN(nb1)) && (!isNaN(nb2)) ) {
            if (nb1 < nb2) {
                document.write= 'Le 1er nombre : ' + nb1 + ' est plus petit que le 2nd : ' + nb2;
            } else if (nb1 > nb2) { 
                document.write= 'Le 1er nombre : ' + nb1 + ' est plus grand que le 2nd : ' + nb2;
            } else {
                document.write= 'Le 1er nombre : ' + nb1 + ' est égal à le 2nd : ' + nb2;
            }
        } else {
            document.write= 'Vous n\'avez pas saisi de nombre(s)';
    };

if ( (!isNaN('nb1')) && (!isNaN('nb2')) ) {
        if (nb1 < nb2) {
            document.write('Le 1er nombre : ' + nb1 + ' est plus petit que le 2nd : ' + nb2);
        } else if (nb1 > nb2) { 
            document.write('Le 1er nombre : ' + nb1 + ' est plus grand que le 2nd : ' + nb2);
        } else {
            document.write('Le 1er nombre : ' + nb1 + ' est égal à le 2nd : ' + nb2);
        }
    } else {
        document.write('Vous n\'avez pas saisi de nombre(s)';
};

if ( (!isNaN(nb1)) || (!isNaN(nb2)) ) {
    if (nb1 < nb2) {
        document.write('Le 1er nombre : ' + nb1 + ' est plus petit que le 2nd : ' + nb2);
    } else if (nb1 > nb2) { 
        document.write('Le 1er nombre : ' + nb1 + ' est plus grand que le 2nd : ' + nb2);
    } else {
        document.write('Le 1er nombre : ' + nb1 + ' est égal à le 2nd : ' + nb2);
    }
} else {
    document.write('Vous n\'avez pas saisi de nombre(s)');
};