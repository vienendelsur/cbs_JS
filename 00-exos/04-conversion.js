
var tempC = prompt("Rentrez une température en Celsius :");

console.log("1 Celsius = " + ((1 * 1.8) + 32) + " Farhenheit.");
document.getElementById('li1').innerHTML = ('1 degré Celsius = ' + ((1 * 1.8) + 32) + ' Farhenheit.');

console.log(tempC + " Celsius = " + (tempC * 1.8 + 32) + " Farhenheit.");
document.getElementById('li2').innerHTML = (tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) + ' Farhenheit.');


var tempF = (tempC * 1.8) + 32;
console.log("1 Farhenheit = " + ((1 - 32) / 1.8) + " Celsius.");
document.getElementById('li3').innerHTML = ("1 degré Farhenheit = " + ((1 - 32) / 1.8) + " Celsius.");

console.log(tempF + " Farhenheit = " + ((tempF - 32) / 1.8) + " Celsius.");
document.getElementById('li4').innerHTML = (tempF + " degrés Farhenheit = " + ((tempF - 32) / 1.8) + " Celsius.");
