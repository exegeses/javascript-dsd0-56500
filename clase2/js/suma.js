/*
    pedir al usuario que ingrese un número
        y ese numero guardarlo en una variable
    pedir al usuario que ingrese otro número
        y ese segundo numero guardaarlo en otra variable

    realizar una suma de esos valores

    mostrar resultado en el span con el id "txt"
*/
let numero = prompt('Ingrese un numero');
let numero2 = prompt('Ingrese su segundo numero')

let suma = parseInt( numero ) + parseInt( numero2 );
let txt = document.getElementById('txt');

txt.innerText = suma;