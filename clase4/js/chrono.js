let txtHoras = document.querySelector('#txtHoras');
let txtMinutos = document.querySelector('#txtMinutos');
let txtSegundos = document.querySelector('#txtSegundos');
let txtSeparador = document.querySelectorAll('.txtSeparador');
console.log(txtSeparador);//HTMLCollection
let cantidad = txtSeparador.length;

let segundos = 0;
let minutos = 0;
let horas = 0;

function dosDigitos( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero;
    }
    return numero;
}

function blinker( num )
{
    let separador = '';
    if ( num%2 == 0 ){
        separador = ':'
    }
    return separador;
}

function chrono()
{
    segundos++;//incremento
    txtSegundos.innerText = dosDigitos(segundos%60);

    minutos = Math.trunc(segundos/60);
    txtMinutos.innerText = dosDigitos(minutos%60);

    horas = Math.trunc(minutos/60);
    txtHoras.innerText = dosDigitos( horas );

    let i = 0;
    while ( i < cantidad ){
        txtSeparador[i].innerText = blinker( segundos );
        i++;
    }
}

setInterval( chrono, 1000 );