// Mon premier fichier .js - pisola Colombbus
// ce fichier est lié à la page 01-04-introduction.html

let bonjour = document.getElementById('b1');
let ajouter = document.getElementById('b2');

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function  popup(){
    alert('Mangerrrrrr !');
}

function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}