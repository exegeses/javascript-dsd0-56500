//ubicar elemento dentro del DOM
let caja = document.getElementById('caja');

//declaración de funciones
function miFuncion()
{
    caja.style.width='75px';
    caja.style.height = '250px';
    caja.style.backgroundColor='#fff';
}

function ocultar()
{
    //caja.style.visibility = 'hidden';
    //caja.style.opacity = '0';
    caja.style.display = 'none';
}

function mostrar()
{
    //caja.style.visibility = 'visible';
    //caja.style.opacity = '1'; 
    caja.style.display = 'block';
}