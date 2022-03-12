// pedirle al usuario que ingrese un número
let numero = prompt('Ingrese un número');

/*
* si el número es menor que 100
*           que diga 'es menor'
* si el número no es no es menor
*           que diga 'NO es menor'
* */

if ( numero < 100 ) {
    document.write('es menor');
}
else {
    document.write('NO es menor');
}