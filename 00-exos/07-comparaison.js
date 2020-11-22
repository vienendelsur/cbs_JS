// comparaison de nombres

//alert('test');
// parseInt()
var nb1 = parseInt(prompt('1er nombre'));// si je mets parseInt je suis sûr que l'on attend un nombre
var nb2 = parseInt(prompt('2ème nombre'));

// if ( (!isNaN(nb1)) && (!isNaN(nb2)) ) {// utilisation de isNaN qui vérifie 
//         if (nb1 < nb2) {
//                 document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus petit que votre 2nd : ' + nb2;
//             } else if (nb1 > nb2) {
//                 document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus grand que votre 2nd : ' + nb2;
//             } else {
//                 document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est égal à votre 2nd : ' + nb2;
//             }
//         } else {
//         alert('Vous n\'avez pas saisi de nombre(s)');
//     };


if ( (!isNaN(nb1)) && (!isNaN(nb2)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
            if (nb1 < nb2) {// si nombre1 est inférieur
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus petit que votre 2nd : ' + nb2;
            } else if (nb1 > nb2) { // si il est supérieur
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est plus grand que votre 2nd : ' + nb2;
            } else {// sinon ils sont égaux
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nb1 + ' est égal à votre 2nd : ' + nb2;
            }// fin if condition comparaison
        } else {
            document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
    };


    SOLUTION JUSTINE

    // if(nbr1 < nbr2){
    //     document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est plus petit que le second ('+nbr2+').';
    // }else if(nbr1 > nbr2){
    //     document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est plus grand que le second ('+nbr2+').';
    // }else if(nbr1 == nbr2){
    //     document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est égal au second ('+nbr2+').';
    // }else{
    //     document.getElementById('p1').innerHTML = 'Attention, nous avons dit un nombre !';
    // }