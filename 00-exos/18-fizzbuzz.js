//fizzbuzz

// alert('coucou');


for (var nombre = 1; nombre <= 100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0))
        console.log('FizzBuzz');// divisible par 3 et 5 fizzzbuzzz
    else if (nombre % 3 === 0)
        console.log('Fizz');//divisible par 3 fizzzz
    else if (nombre % 5 === 0)
        console.log('Buzz');// divisible par 5 buzzzz
    else
        console.log(nombre);// les autres
}