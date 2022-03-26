/* al pulsar el botón, tirar el dado */

let dado = document.querySelector('#dado');
let boton = document.querySelector('#boton');

boton.onclick = function tirarDado()
{
    //generar número aleatorio entre 0 y 1
    let numeroAleatorio = Math.random();
    console.log(numeroAleatorio);

    // número entre 1 y 6
    let numeroMultiplicado = (numeroAleatorio*5) + 1;
    console.log(numeroMultiplicado);

    //redondeamos a número entero
    let numero = Math.round( numeroMultiplicado );
    console.log(numero);

    //mostramos imagen de dado
    dado.innerHTML = '<img src="dados/dado'+numero+'.png">';
}

//tirarDado();
