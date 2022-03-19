//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

/* mostrar fecha actual
    con el formato 19/03/2022
* */

//creamos un objeto de fecha y lo guardamos en una variable
let fecha = new Date();
//Sat Mar 19 2022 15:40:13 GMT-0300 (hora estándar de Argentina)

//obtenemos el número del día del mes
let diaMes = fecha.getDate();
if ( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}

//obtenemos número de mes actual
let mes = fecha.getMonth()+1;
if ( mes < 10 ){
    mes = '0'+ mes;
}

//obtenemos número del año
let anio = fecha.getFullYear();

//escribimos en el span
//txt.innerHTML = '<img src="imgs/solana.png">';
txt.innerText = diaMes +'/'+ mes +'/'+ anio;