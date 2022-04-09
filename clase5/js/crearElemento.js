let caja = document.querySelector('#caja');
let boton = document.querySelector('#boton');

//creamos un elemento div (en memoria)
let cajaNueva = document.createElement('div');

//lo adjuntamos en la primera caja
boton.onclick = function(){
    caja.appendChild(cajaNueva);
    cajaNueva.classList.add('orange');
    cajaNueva.innerText = 'hola';
}

