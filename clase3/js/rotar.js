//ubicar elemento dentro del DOM
let sol = document.getElementById('sol');

let grados = 0;

function rotar()
{
    grados++;
    sol.style.transform = 'rotate( '+grados+'deg )';
}

rotar();
setInterval( rotar, 100 );